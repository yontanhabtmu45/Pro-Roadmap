-- ================================
-- ADMIN TABLE (LOGIN REQUIRED)
-- ================================
CREATE TABLE IF NOT EXISTS admin_users (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_email VARCHAR(255) NOT NULL UNIQUE,
    admin_password_hash VARCHAR(255) NOT NULL,
    admin_name VARCHAR(255) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- ROADMAP MAIN TABLE
-- ================================
CREATE TABLE IF NOT EXISTS roadmaps (
    roadmap_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    created_by INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES admin_users(admin_id)
);

-- ================================
-- ROADMAP STEPS (OPTIONAL)
-- Each roadmap can have multiple steps/sections
-- ================================
CREATE TABLE IF NOT EXISTS roadmap_steps (
    step_id INT AUTO_INCREMENT PRIMARY KEY,
    roadmap_id INT NOT NULL,
    step_title VARCHAR(255) NOT NULL,
    step_description TEXT,
    step_order INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (roadmap_id) REFERENCES roadmaps(roadmap_id)
);

-- ================================
-- INSERT A DEFAULT ADMIN (OPTIONAL)
-- Replace email/password_hash with your values
-- ================================
INSERT INTO admin_users (admin_email, admin_password_hash, admin_name)
VALUES ('admin@example.com', '<HASHED_PASSWORD>', 'Site Admin');
