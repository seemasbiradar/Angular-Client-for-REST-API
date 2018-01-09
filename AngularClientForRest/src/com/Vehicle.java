package com;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
//import javax.xml.bind.ValidationException;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "vehicle")
@XmlAccessorType(XmlAccessType.FIELD)
public class Vehicle implements Serializable {
	private static final long serialVersionUID = 1L;
	private int id;
	private int year;
	private String make;
	private String model;

	public Vehicle() {
	}

	public Vehicle(int id, int year, String make, String model) {
		super();
		this.id = id;
		this.year = year;
		this.make = make;
		this.model = model;
	}

	@XmlElement
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@XmlElement
	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	@XmlElement
	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	@XmlElement
	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

}
