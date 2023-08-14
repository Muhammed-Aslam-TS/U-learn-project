import { __decorate } from "tslib";
import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AdminModule } from './components/admin/admin.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AboutPageComponent } from './components/home/about-page/about-page.component';
import { NavBarComponent } from './shared/components/user/nav-bar/nav-bar.component';
import { TextEditorComponent } from './components/course/text-editor/text-editor.component';
import { DashBoardComponent } from './components/user/user-dash-board/dash-board/dash-board.component';
import { DashBordNavBarComponent } from './shared/components/user/dash-bord-nav-bar/dash-bord-nav-bar.component';
import { PremiumComponent } from './components/course/premium/premium.component';
import { GetAllCoursesComponent } from './components/user/user-dash-board/get-all-courses/get-all-courses.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { PymentOptionsComponent } from './components/pyment-options/pyment-options.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { NgxPayPalModule } from 'ngx-paypal';
import { StripeComponent } from './components/pyment-options/stripe/stripe.component';
import { PaymentSuccessFullComponent } from './components/pyment-options/payment-success-full/payment-success-full.component';
import { PaymentFaildComponent } from './components/pyment-options/payment-faild/payment-faild.component';
import { GetAllPurchesedCourseComponent } from './components/user/user-dash-board/get-all-purchesed-course/get-all-purchesed-course.component';
import { PaymentDetailsComponent } from './components/user/user-dash-board/payment-details/payment-details.component';
import { LatastCoursesComponent } from './components/user/user-dash-board/latast-courses/latast-courses.component';
import { FowllowersComponent } from './components/user/user-dash-board/fowllowers/fowllowers.component';
import { WalletComponent } from './components/user/user-dash-board/wallet/wallet.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { UserAccountComponent } from './components/user/user-account/user-account.component';
import { CourseDisplayComponent } from './components/home/course-display/course-display.component';
import { UlearnFeaturesComponent } from './components/home/ulearn-features/ulearn-features.component';
import { UlearnBannerComponent } from './components/home/ulearn-banner/ulearn-banner.component';
import { MyCoursesComponent } from './components/user/user-dash-board/my-courses/my-courses.component';
import { TranslateModule } from '@ngx-translate/core';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { SubscribesComponent } from './components/user/user-dash-board/subscribes/subscribes.component';
import { SearchResultComponent } from './components/home/search-result/search-result.component';
import { AllCoursesComponent } from './components/home/all-courses/all-courses.component';
import { PageNOtfoundComponent } from './components/pagenotFound/page-notfound/page-notfound.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MoreCourseDetailsComponent } from './components/user/user-dash-board/more-course-details/more-course-details.component';
// import { firebases } from "../environments/environment";
const firebase = {
    apiKey: "AIzaSyBC4y6cT6FCm00SA6CfQeomtW_4YRPYdI4",
    authDomain: "auth-1dbcc.firebaseapp.com",
    projectId: "auth-1dbcc",
    storageBucket: "auth-1dbcc.appspot.com",
    messagingSenderId: "623488054012",
    appId: "1:623488054012:web:33c7ba239d5c84aaa09d79",
    measurementId: "G-G5SE36HY2F"
};
// const firebase = {
//   apiKey: firebases.apiKey,
//   authDomain: firebases.authDomain,
//   projectId:firebases.projectId,
//   storageBucket:firebases.storageBucket,
//   messagingSenderId:firebases.messagingSenderId,
//   appId:firebases.appId,
//   measurementId:firebases.measurementId
// }
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AddCourseComponent,
            UserLoginComponent,
            UserRegisterComponent,
            HomePageComponent,
            AboutPageComponent,
            NavBarComponent,
            TextEditorComponent,
            DashBoardComponent,
            DashBordNavBarComponent,
            PremiumComponent,
            GetAllCoursesComponent,
            CourseDetailsComponent,
            PymentOptionsComponent,
            StripeComponent,
            PaymentSuccessFullComponent,
            PaymentFaildComponent,
            GetAllPurchesedCourseComponent,
            PaymentDetailsComponent,
            LatastCoursesComponent,
            FowllowersComponent,
            WalletComponent,
            FooterComponent,
            UserAccountComponent,
            CourseDisplayComponent,
            UlearnFeaturesComponent,
            UlearnBannerComponent,
            MyCoursesComponent,
            SubscribesComponent,
            SearchResultComponent,
            AllCoursesComponent,
            PageNOtfoundComponent,
            SpinnerComponent,
            MoreCourseDetailsComponent,
        ],
        imports: [
            BrowserModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            MatStepperModule,
            AngularFireModule.initializeApp(firebase),
            AdminModule,
            MatPaginatorModule,
            GooglePayButtonModule,
            NgxPayPalModule,
            TranslateModule.forRoot(),
            StreamChatModule,
            StreamAutocompleteTextareaModule,
            StreamChatModule,
            NgxPaginationModule,
            MatSlideToggleModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map