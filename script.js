function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let recommender_name = document.getElementById("rec_name").value;
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    var saidby = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.setAttribute("id", "new-element")
    saidby.setAttribute("class","from-name");
    saidby.innerHTML = "-" + recommender_name;
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>" + "<br>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    document.getElementById("new-element").appendChild(saidby);
    
    // Reset the value of the textarea
    recommendation.value = "";
    recommender_name = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
