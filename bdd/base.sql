CREATE DATABASE gestion_maison CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'gestion_user'@'localhost'
IDENTIFIED BY 'MotDePasseFort123!';

GRANT ALL PRIVILEGES
ON gestion_maison.*
TO 'gestion_user'@'localhost';

FLUSH PRIVILEGES;

EXIT;