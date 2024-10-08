# Use an official PHP runtime as a parent image
FROM php:8.2-fpm

LABEL authors="kemboielvis"

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    netcat-openbsd \
    cron \
    supervisor \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing application directory contents
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html
# Ensure storage and cache directories exist and set correct permissions
#RUN chown -R www-data:www-data /var/www/html  /var/www/html/storage /var/www/html/bootstrap \
#    && chmod -R 755 /var/www/html/storage /var/www/html/storage/logs /var/www/html/storage/framework /var/www/html/storage/framework/cache /var/www/html/storage/framework/sessions /var/www/html/storage/framework/views /var/www/html/bootstrap/cache


# Install PHP and Node.js dependencies
RUN composer install --optimize-autoloader --no-dev \
    && npm install \
    && npm run build

# copy the necessary files
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
# Configure Supervisor for Laravel Queues
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# COPY CRONTAB AND CONFIGURE CRON TAB
COPY docker/crontab /etc/cron.d/crontab
RUN chmod 0644 /etc/cron.d/crontab
RUN crontab /etc/cron.d/crontab

# Make the shell script executable
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port 9000 and start php-fpm server
EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["sh", "-c", "chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache && cron && php-fpm"]
