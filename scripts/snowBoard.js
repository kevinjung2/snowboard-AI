class SnowBoard {
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = 0
        this.acceleration = 0.2
        this.friction = 0.05
        this.maxSpeed = 3

        this.angle = 0
        this.maxAngle = 1

        this.horizontalSpeed = 3

        this.controls = new Controls()
    }

    update(){
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            // this.speed -= this.acceleration;
            this.angle > 0 ? this.angle = 1.5 : this.angle = -1.5
        }
        if(this.controls.left){
            this.angle += 0.05;
        }
        if(this.controls.right){
            this.angle -= 0.05;
        }

        //set angle to maxAngle if turned too far
        if(!this.controls.reverse){
            this.angle > this.maxAngle && (this.angle = this.maxAngle)
            this.angle < -this.maxAngle && (this.angle = -this.maxAngle)
        }
        
        //reduce speed with friction
        this.speed > 0 && (this.speed -= this.friction)
        this.speed < 0 && (this.speed += this.friction)

        //set speed to maxSpeed if too fast
        this.speed > this.maxSpeed && (this.speed = this.maxSpeed)
        this.speed < -this.maxSpeed/2 && (this.speed = -this.maxSpeed/2)

        this.x -= Math.sin(this.angle)*this.speed
        this.y -= Math.cos(this.angle)*this.speed

        if(this.y < 0+this.height/2){
            this.y = 0+this.height/2
        }
    }

    draw(context){
        context.save()
        context.translate(this.x, this.y)
        context.rotate(-this.angle)

        context.beginPath()
        context.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        )

        context.fill()

        context.restore()
    }
}