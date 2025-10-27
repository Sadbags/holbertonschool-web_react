import React from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySectionWithMarginBottom/BodySectionWithMarginBottom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Notifications displayDrawer={true} />
      <Header />

      <main className="flex-grow w-full max-w-5xl mx-auto p-8 md:p-4 sm:p-2">
        <BodySectionWithMarginBottom title="Login to continue">
          <Login />
        </BodySectionWithMarginBottom>

        <BodySectionWithMarginBottom title="Course list">
          <CourseList />
        </BodySectionWithMarginBottom>

        <BodySection title="News from the school">
          <p className="text-justify">
            ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Similique, asperiores architecto blanditiis fuga doloribus sit illum
            aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut
            magni dicta. Recusandae, quia dicta?
          </p>
        </BodySection>
      </main>

      <Footer />
    </div>
  );
}

export default App;
