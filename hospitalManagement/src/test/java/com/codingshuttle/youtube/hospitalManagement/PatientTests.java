package com.codingshuttle.youtube.hospitalManagement;


import com.codingshuttle.youtube.hospitalManagement.dto.BloodGroupCountResponseEntity;
import com.codingshuttle.youtube.hospitalManagement.entity.Patient;
import com.codingshuttle.youtube.hospitalManagement.entity.type.BloodGroupType;
import com.codingshuttle.youtube.hospitalManagement.repository.PatientRepository;
import com.codingshuttle.youtube.hospitalManagement.service.PatientService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.util.List;

@SpringBootTest
public class PatientTests {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PatientService patientService;

    @Test
    public void testPatientRepository(){
        List<Patient> patientList=patientRepository.findAllPatientWithAppointment();
        System.out.println(patientList);


//        Patient p1=new Patient();
//        patientRepository.save(p1);


    }

    @Test
    public void testTransactionMethods(){
//        Patient patient=patientService.getPatientById(1L);

//        Patient patient=patientRepository.findByName("Rahul");


//        List<Patient> patientList = patientRepository.findByBirthDateOrEmail(LocalDate.of(1992,12,01),"dishant@gmail.com");

//        List<Patient> patientList=patientRepository.findByNameContaining("Di");

//        List<Patient> patientList=patientRepository.findByBloodGroup(BloodGroupType.A_POSITIVE);

//        List<Patient> patientList=patientRepository.findByBornAfterDate(LocalDate.of(1988,3,14));

//        List<Patient> patientList=patientRepository.findAllPatient();
//        for(Patient patient: patientList){
//            System.out.println(patient);
//        }

//        List<Object[]> bloodGroupList=patientRepository.countEachBloodGroupType();
//        for(Object[] objects:bloodGroupList){
//            System.out.println(objects[0]+" "+objects[1]);
//        }


//        int rowsUpdated=patientRepository.updateNameWithId("Rhul", 1L);
//        System.out.println(rowsUpdated);


//        List<BloodGroupCountResponseEntity> bloodGroupList=patientRepository.countEachBloodGroupType();
//        for(BloodGroupCountResponseEntity bloodGroupCountResponse:bloodGroupList){
//            System.out.println(bloodGroupCountResponse);
//        }

        Page<Patient> patientList=patientRepository.findAllPatients(PageRequest.of(0,2));
        for(Patient patient: patientList){
            System.out.println(patient);
        }
    }
}
