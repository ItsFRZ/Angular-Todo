package com.ItsFRZ.ngtodo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ItsFRZ.ngtodo.Model.TodoEntity;
import com.ItsFRZ.ngtodo.Repository.TodoRepository;


@RestController
@RequestMapping("tapi")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoRestController {

	@Autowired
	private TodoRepository repository;
	
	
	public TodoRepository getRepository() {
		return repository;
	}


	public void setRepository(TodoRepository repository) {
		this.repository = repository;
	}


	@GetMapping
	public List<TodoEntity> getAllTodo(){
		
		return repository.findAll();
	}
	
	@DeleteMapping
	public void deleteAllTodo(){
		 repository.deleteAll();
	}
	
	@PostMapping
	public TodoEntity saveTodo(@RequestBody TodoEntity entity) {
	
		return repository.save(entity);
	}
	
	@PutMapping
	public TodoEntity updateTodo(@RequestBody TodoEntity entity) {
	
		return repository.save(entity);
	}
	
	@DeleteMapping("/{id}")
	public void deleteTodoById(@PathVariable int id) {
		
		repository.deleteById(id);
	}
	
	
	
	@GetMapping("/{id}")
	public Optional<TodoEntity> getTodoById(@PathVariable int id){
		
		return repository.findById(id);
	}
}
