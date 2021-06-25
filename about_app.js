const teamCards=document.querySelectorAll('.card');




    teamCards[0].addEventListener('mouseover',(e) => {
        memberName=e.target.querySelector('.name');
        memberBio=e.target.querySelector('p');
        memberName.innerText='Sachin Roy';
        memberBio.innerText='The Brains behind all this !';
        

    });
    teamCards[1].addEventListener('mouseover',(e) => {
        memberName=e.target.querySelector('.name');
        memberName.innerText='Sylvie Smith';
        memberBio=e.target.querySelector('p');
        memberBio.innerText='The Reason this site is still Up!';

    });
    teamCards[2].addEventListener('mouseover',(e) => {
        memberName=e.target.querySelector('.name');
        memberName.innerText='Roy Harper';
        memberBio=e.target.querySelector('p');
        memberBio.innerText='The brains behind the design';

    });
    teamCards[3].addEventListener('mouseover',(e) => {
        memberName=e.target.querySelector('.name');
        memberName.innerText='Oliver Queen';
        memberBio=e.target.querySelector('p');
        memberBio.innerText='The guy who dealt with JS , Oof!';

    });
    teamCards[4].addEventListener('mouseover',(e) => {
        memberName=e.target.querySelector('.name');
        memberName.innerText='Jamie Smith';
        
      

    });
    teamCards[5].addEventListener('mouseover',(e) => {
        memberName=e.target.querySelector('.name');
        memberName.innerText='John Hoot';
        memberBio=e.target.querySelector('p');
        memberBio.innerText='App creator';

    });
   



teamCards.forEach((teamCard) => {

    

    teamCard.addEventListener('mouseleave',(e) => {
        card=e.target;
        card.querySelector('.name').innerText=null;
        card.querySelector('p').innerText=null;
        

        
    });


});



