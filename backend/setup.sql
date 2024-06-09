-- sql script


CREATE DATABASE IF NOT EXISTS PassOut;
       CREATE USER IF NOT EXISTS 'pass_out'@'localhost' IDENTIFIED BY 'passout123$';
              GRANT ALL PRIVILEGES ON PassOut.* TO 'pass_out'@'localhost';
                                      GRANT SELECT ON performance_schema.* TO 'pass_out'@'localhost';
FLUSH PRIVILEGES;