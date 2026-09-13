import Footer from "../components/Footer";
import Projects from "../components/Projects";
import "../App.css";
import About from "../components/About";
import Contact from "../components/Contact";
import "../styles/Header.css";
import {useRef } from "react";

function Main() {
   

//function to enable the scroll behaviour when a header element is clicke
  const contentRef = useRef(null);
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current?.scrollIntoView(
        {
          behavior: "smooth", 
          block: "start"
        });      
    } else {
      
      console.error("Useref is still null");
    }
  };
  return (
    <>
      
      <div className="header-container">
        <li className="header-elements">
          <ul>
           
            <a  href="">About</a>
          </ul>
          <ul>
            <a href="/">Skills</a>
          </ul>
          <ul>
            <a onClick={scrollToContent}>Projects</a>
          </ul>
          <ul>
            <a href="/">Contact</a>
          </ul>
        </li>
      </div>

      <div className="about">
        <About />
        <p>
          My
          <br />
          The Lifetime of JavaScript
          <p>
            Variables When you declare a variable within a function, the
            variable can only be accessed within that function. When you exit
            the function, the variable is destroyed. These variables are called
            local variables.
          </p>
          You can have local variables with the same name in different
          functions, because each is recognized only by the function in which it
          is declared. If you declare a variable outside a function, all the
          functions on your page can access it. The lifetime of these variables
          starts when they are declared, and ends when the page is closed. What
          is an Event? Event Handlers Event Handlers are JavaScript methods,
          i.e. functions of objects,
          <p>
            that allow us as JavaScript programmers to control what happens when
            events occur. 82 Directly or indirectly, an Event is always the
            result of something a user does. For example, we've already seen
            Event Handlers like onClick and onMouseOver that respond to mouse
            actions.
          </p>{" "}
          Another type of Event, an internal change-of-state to the page
          (completion of loading or leaving the page). An onLoad Event can be
          considered an indirect result of a user action.
          <p>
            Although we often refer to Events and Event Handlers
            interchangeably, it's important to keep in mind the distinction
            between them. An Event is merely something that happens - something
            that it is initiated by an Event Handler (onClick, onMouseOver,
            etc...).
          </p>{" "}
          The elements on a page which can trigger events are known as "targets"
          or "target elements," and we can easily understand how a button which
          triggers a Click event is a target element for this event.
          <p>
            Typically, events are defined through the use of Event Handlers,
            which are bits of script that tell the browser what to do when a
            particular event occurs at a particular target.
          </p>
          These Event Handlers are commonly written as attributes of the target
          element's HTML tag. The Event Handler for a Click event at a form
          field button element is quite simple to understand: PUT TYPE="button"
          NAME="click1" VALUE="Click me for fun!" onClick="event_handler_code
          The event_handler_code portion of this example is any valid JavaScript
          and it will be executed when the specified event is triggered at this
          target element.
          <p>
            This particular topic will be continued in Incorporating JavaScripts
            into your HTML pages. There are "three different ways" that Event
            Handlers can be used to trigger Events or Functions. Method 1 (Link
            Events):
          </p>{" "}
          Places an Event Handler as an attribute within an like thi name
        </p>
      </div>
      <Contact />
      <div>
        <Projects ref={contentRef} />
      </div>
      <Footer />
    </>
  );
}

export default Main;
