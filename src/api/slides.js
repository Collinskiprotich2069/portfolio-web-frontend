function slideProfiles() {
    /*
  const first_image = document.getElementById("first");
  const second_image = document.getElementById("second");
  const third_image = document.getElementById("third");
*/
    document.body.onload = () => {
        
        return document.createElement(
          <img
            id="first"
            src="../src/assets/profilepic/prof1.jpg"
            alt="pic1"
          ></img>
        );
    }

    setTimeout(() => {
        document.createElement(
          <img
            id="second"
            src="../src/assets/profilepic/prof2.jpg"
            alt="pic2"
          ></img>,
        );
        document.createElement(
          <img
            id="third"
            src="../src/assets/profilepic/prof3.jpg"
            alt="pic3"
          ></img>,
        );
        
    },100)

}

slideProfiles();
