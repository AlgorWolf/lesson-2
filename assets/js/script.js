let users = [
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 16, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Singing" },
    { firstName: "Beckham", lastName: "Aisosa", age: 18, hobby: "chatting" },
    { firstName: "Daniel", lastName: "Longbottom", age: 17, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 15, hobby: "Swimming" },
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Video Gaming" },
    { firstName: "Daniel", lastName: "Longbottom", age: 20, hobby: "Swimming" },
    { firstName: "Jacob", lastName: "Black", age: 19, hobby: "Boxing" },
    { firstName: "Susan", lastName: "Steward", age: 14, hobby: "Skating" },
    { firstName: "Daniel", lastName: "Longbottom", age: 17, hobby: "Gliding" },
    { firstName: "Jacob", lastName: "Hungary", age: 15, hobby: "Sking" },
    { firstName: "Aisha", lastName: "Ahmed", age: 19, hobby: "Jumping" },
    { firstName: "Nathaniel", lastName: "Homelander", age: 16, hobby: "Cricketing" },
    { firstName: "Joseph", lastName: "Yesuful", age: 20, hobby: "Painting" },
    { firstName: "Lizzy", lastName: "Steward", age: 14, hobby: "Singing" },
    { firstName: "Elon", lastName: "Longothan", age: 16, hobby: "Football" },
    { firstName: "Winifred", lastName: "Opal", age: 15, hobby: "Singing" },
    { firstName: "Jason", lastName: "Heartthrob", age: 14, hobby: "Singing" },
    { firstName: "Daniel", lastName: "bottomfiller", age: 16, hobby: "Football" },
    { firstName: "Job", lastName: "Lantern", age: 15, hobby: "Singing" },
  ];

  let singleUser = users.map((user)=>{
    //let's add the firstname and lastname together
    let fullName = user.firstName + ' ' + user.lastName;
    return `
      <h3 class='name'>${fullName}</h3>
      <p class="age">${user.age}</p>
    `
  });
  let userinfo = document.querySelector("#run");
  userinfo.innerHTML= singleUser;
  
  