package com.ItsFRZ.ngtodo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ItsFRZ.ngtodo.Model.TodoEntity;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, Integer> {

}
