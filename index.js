class Circle {
  constructor(radius) {
  	this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.radius * 2
  }

  get area() {
    return Math.PI	* (this.radius * this.radius)	
  }


  set diameter(newDiameter) {
    return this.radius = newDiameter/2
  }

  set circumference(newCircumferance) {
     return this.radius = (newCircumferance/Math.PI)/2
  }

  set area(newArea) {
    return this.radius = Math.sqrt(newArea / Math.PI)	
  }


}