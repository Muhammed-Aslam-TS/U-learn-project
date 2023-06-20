import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PymentOptionsComponent = class PymentOptionsComponent {
    // -------------------------------------------
    constructor(service) {
        this.service = service;
        // @ViewChild("paymentRef", { static: true }) paymentRef!: ElementRef;
        // image:string
        // description :string
        // name :string
        // Fname :string
        // Lname :string
        // email :string
        // Price :number
        // phone :string
        this.courseId = localStorage.getItem('courseId');
        this.userId = localStorage.getItem('userId');
        this.courseData = {
            image: '',
            description: '',
            name: '',
            Fname: '',
            Lname: '',
            email: '',
            Price: '',
            courseId: this.courseId,
            userId: this.userId,
            phone: ''
        };
    }
    ngOnInit() {
        this.service.getDetails(this.courseId).subscribe((data) => {
            console.log(data);
            this.courseData.image = data.course.CourseImage;
            this.courseData.description = data.course.discription;
            this.courseData.name = data.course.courseName;
            this.courseData.Price = data.course.Price;
            this.courseData.Fname = data.user.Fname;
            this.courseData.Lname = data.user.Lname;
            this.courseData.email = data.user.Email;
            this.courseData.phone = data.user.Phone;
        });
    }
};
PymentOptionsComponent = __decorate([
    Component({
        selector: 'app-pyment-options',
        templateUrl: './pyment-options.component.html',
        styleUrls: ['./pyment-options.component.css']
    })
], PymentOptionsComponent);
export { PymentOptionsComponent };
//# sourceMappingURL=pyment-options.component.js.map