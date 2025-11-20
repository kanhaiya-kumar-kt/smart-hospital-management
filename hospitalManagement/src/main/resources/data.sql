-- ============================
-- PATIENT TABLE SEED DATA
-- ============================

INSERT INTO patient (name, gender, birth_date, email, blood_group) VALUES
  ('Rahul', 'MALE', '1990-05-10', 'rahul@gmail.com', 'O_POSITIVE'),
  ('Diya Patel', 'FEMALE', '1995-08-20', 'diya@gmail.com', 'A_POSITIVE'),
  ('Dishant Verma', 'MALE', '1992-12-01', 'dishant@gmail.com', 'A_POSITIVE'),
  ('Neha Iyer', 'FEMALE', '1992-11-03', 'neha@gmail.com', 'AB_POSITIVE')
ON CONFLICT (email) DO NOTHING;

-- ============================
-- DOCTOR TABLE SEED DATA
-- ============================

INSERT INTO doctor (name, specialization, email) VALUES
  ('Dr Kanhaiya Kamar', 'Cardiology', 'kanhaiya@gmail.com'),
  ('Dr Aman Kumar', 'Pharmacitic', 'aman@gmail.com'),
  ('Dr Rohit Kumar', 'Paramedical', 'rohit@gmail.com')
ON CONFLICT (email) DO NOTHING;

-- ============================
-- APPOINTMENTS (lookup by email -> id; idempotent)
-- ============================

-- Row 1: 2025-07-01 10:30:00  doctor: kanhaiya@gmail.com  patient: diya@gmail.com
INSERT INTO appointment (appointment_time, reason, doctor_id, patient_id)
SELECT
  TIMESTAMP '2025-07-01 10:30:00',
  'General Checkup',
  d.id,
  p.id
FROM
  (SELECT id FROM doctor WHERE email = 'kanhaiya@gmail.com') d,
  (SELECT id FROM patient WHERE email = 'diya@gmail.com') p
WHERE NOT EXISTS (
  SELECT 1 FROM appointment a
  WHERE a.appointment_time = TIMESTAMP '2025-07-01 10:30:00'
    AND a.doctor_id = d.id
    AND a.patient_id = p.id
);

-- Row 2: 2025-07-02 11:00:00  doctor: aman@gmail.com  patient: diya@gmail.com
INSERT INTO appointment (appointment_time, reason, doctor_id, patient_id)
SELECT
  TIMESTAMP '2025-07-02 11:00:00',
  'Skin Rash',
  d.id,
  p.id
FROM
  (SELECT id FROM doctor WHERE email = 'aman@gmail.com') d,
  (SELECT id FROM patient WHERE email = 'diya@gmail.com') p
WHERE NOT EXISTS (
  SELECT 1 FROM appointment a
  WHERE a.appointment_time = TIMESTAMP '2025-07-02 11:00:00'
    AND a.doctor_id = d.id
    AND a.patient_id = p.id
);

-- Row 3: 2025-07-03 09:45:00  doctor: rohit@gmail.com  patient: dishant@gmail.com
INSERT INTO appointment (appointment_time, reason, doctor_id, patient_id)
SELECT
  TIMESTAMP '2025-07-03 09:45:00',
  'Knee Pain',
  d.id,
  p.id
FROM
  (SELECT id FROM doctor WHERE email = 'rohit@gmail.com') d,
  (SELECT id FROM patient WHERE email = 'dishant@gmail.com') p
WHERE NOT EXISTS (
  SELECT 1 FROM appointment a
  WHERE a.appointment_time = TIMESTAMP '2025-07-03 09:45:00'
    AND a.doctor_id = d.id
    AND a.patient_id = p.id
);

-- Row 4: 2025-07-04 14:00:00  doctor: kanhaiya@gmail.com  patient: rahul@gmail.com
INSERT INTO appointment (appointment_time, reason, doctor_id, patient_id)
SELECT
  TIMESTAMP '2025-07-04 14:00:00',
  'Follow-up Visit',
  d.id,
  p.id
FROM
  (SELECT id FROM doctor WHERE email = 'kanhaiya@gmail.com') d,
  (SELECT id FROM patient WHERE email = 'rahul@gmail.com') p
WHERE NOT EXISTS (
  SELECT 1 FROM appointment a
  WHERE a.appointment_time = TIMESTAMP '2025-07-04 14:00:00'
    AND a.doctor_id = d.id
    AND a.patient_id = p.id
);

-- Row 5: 2025-07-05 16:15:00  doctor: kanhaiya@gmail.com  patient: neha@gmail.com
INSERT INTO appointment (appointment_time, reason, doctor_id, patient_id)
SELECT
  TIMESTAMP '2025-07-05 16:15:00',
  'Consultation',
  d.id,
  p.id
FROM
  (SELECT id FROM doctor WHERE email = 'kanhaiya@gmail.com') d,
  (SELECT id FROM patient WHERE email = 'neha@gmail.com') p
WHERE NOT EXISTS (
  SELECT 1 FROM appointment a
  WHERE a.appointment_time = TIMESTAMP '2025-07-05 16:15:00'
    AND a.doctor_id = d.id
    AND a.patient_id = p.id
);

-- Row 6: 2025-07-06 08:30:00  doctor: aman@gmail.com  patient: <replace_with_patient_email>
-- NOTE: original referenced patient_id = 5 which does not exist in the seeded patients.
-- Replace 'PUT_PATIENT_EMAIL' below with the correct patient email (e.g. 'rahul@gmail.com'), or remove this block.
INSERT INTO appointment (appointment_time, reason, doctor_id, patient_id)
SELECT
  TIMESTAMP '2025-07-06 08:30:00',
  'Allergy Treatment',
  d.id,
  p.id
FROM
  (SELECT id FROM doctor WHERE email = 'aman@gmail.com') d,
  (SELECT id FROM patient WHERE email = 'PUT_PATIENT_EMAIL') p
WHERE NOT EXISTS (
  SELECT 1 FROM appointment a
  WHERE a.appointment_time = TIMESTAMP '2025-07-06 08:30:00'
    AND a.doctor_id = d.id
    AND a.patient_id = p.id
);
