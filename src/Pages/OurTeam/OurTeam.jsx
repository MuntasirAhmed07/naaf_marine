import React from "react";
import Member1 from "../../Assets/Team/Member1.png";
import Member10 from "../../Assets/Team/Member10.png";
import Member11 from "../../Assets/Team/Member11.png";
import Member12 from "../../Assets/Team/Member12.png";
import Member13 from "../../Assets/Team/Member13.png";
import Member14 from "../../Assets/Team/Member14.png";
import Member15 from "../../Assets/Team/Member15.png";
import Member16 from "../../Assets/Team/Member16.png";
import Member17 from "../../Assets/Team/Member17.png";
import Member18 from "../../Assets/Team/Member18.png";
import Member19 from "../../Assets/Team/Member19.png";
import Member2 from "../../Assets/Team/Member2.png";
import Member3 from "../../Assets/Team/Member3.png";
import Member4 from "../../Assets/Team/Member4.png";
import Member5 from "../../Assets/Team/Member5.png";
import Member6 from "../../Assets/Team/Member6.png";
import Member7 from "../../Assets/Team/Member7.png";
import Member8 from "../../Assets/Team/Member8.png";
import Member9 from "../../Assets/Team/Member9.png";



import TeamCard from "../../Components/TeamCard/TeamCard";
import "./ourTeam.css";

const OurTeam = () => {
  return (
    <div className="header">
      <h2 className="underline"> About Team</h2>
      <TeamCard 
        name="Capt. Md. Salah Uddin Chowdhury"
        title="Chief Executive Officer, DPA & CSO"
        img={Member1}
        mail="Email: info@naafmarine.com captsalahuddin@naafmarine.com"
        mob="Mob: +8801730354161, +8801713463275"
        tel="Tel: +880 2333312130"
        web="Web: www.naafmarine.com"
        skype="Skype: naafmarine"
      />
      <section className="teamSpacing">
      <TeamCard 
        
        name="Capt. Shamsuddin Chowdhury"
        title="Executive Director, ADPA & ACSO"
        img={Member2}
        mail="Email: info@naafmarine.com captshamsuddin@naafmarine.com"
        mob="Mob: +8801730354160, +8801712029818"
      />
      <TeamCard 
        
        name="Engr Md. Nashir Uddin"
        title="Technical Director & MR"
        img={Member3}
        mail="Email:technical@naafmarine.com nashir@naafmarine.com"
        mob="Mob: +8801730354162"
      />
      </section>
      <section className="teamSpacing">
      <TeamCard 
        name="Capt. Mohammed Imtiaz"
        title="Director Shipping"
        img={Member4}
        mail="Email:crew@naafmarine.com captimtiaz@naafmarine.com"
        mob="Mob: +8801730354163"
      />
      <TeamCard 
        name="Lt. Col. Md. Zayed Hossain (Retd)"
        title="Director (HRM, Admin)"
        img={Member5}
        mail="Email:zayed@naafmarine.com"
        mob="Mob: +8801769003858"
      />
      </section>
      <section className="teamSpacing">
      <TeamCard 
        name="Mustafa Jamal Nasser"
        title="Technical Consultant"
        img={Member6}
        mail="Email: info@naafmarine.com cejamnasser@yahoo.com"
        mob="Mob: +8801701660902"
      />
      <TeamCard 
        name="Mr. James Roy"
        title="General Manager"
        img={Member7}
        mail="Email: agency@naafmarine.com
        james@naafmarine.com"
        mob="Mob: +8801708485374"
      />
      <TeamCard 
        name="K.M. Monjur Ullah"
        title="Manager (Finance & Admin)"
        img={Member8}
        mail="Email:accounts@naafmarine.com "
        mob="Mob: +8801730354159"
      />
      </section>
      <section className="teamSpacing">
      <TeamCard 
        
        name="Faisal Md. Minhaj Monju"
        title="Sr. Executive Officer (Agency)"
        img={Member9}
        mail="Email: agency@naafmarine.com "
        mob="Mob: +8801730354167"
      />
      <TeamCard 
        
        name="Md. Borhan Uddin"
        title="Sr. Executive Officer (Crewing)"
        img={Member10}
        mail="Email: crew@naafmarine.com"
        mob="Mob: +8801730354166"
      />
      <TeamCard 
        
        name="Rabiul Alam (Saiful)"
        title="Sr. Executive Officer (Crewing)"
        img={Member11}
        mail="Email: accounts@naafmarine.com"
        mob="Mob: +8801730354158"
      />
      <TeamCard 
        
        name="Md. Nahid Ul Islam"
        title="Sr. Executive Officer (Accounts)"
        img={Member12}
        mail="Email:technical@naafmarine.com nashir@naafmarine.com"
        mob="Mob: +8801730354162"
      />
      <TeamCard 
        
        name="Md. Sharif Uz Zaman"
        title="Sr. Executive Officer (Agency & Crewing)"
        img={Member13}
        mail="Email:agency@naafmarine.com crew@naafmarine.com"
        mob="Mob: +8801708485371"
      />
      <TeamCard 
        
        name="Sajjad Hossen"
        title="Executive Officer (Crewing)"
        img={Member14}
        mail="Email: crew@naafmarine.com"
        mob="Mob: +8801708485370"
      />
      </section>
      <section className="teamSpacing bottomSpacing">
      <TeamCard 
        
        name="Rajon Das"
        title="Executive Officer (Technical)"
        img={Member15}
        mail="Email: technical@naafmarine.com"
        mob="Mob: +8801708485371"
      />
      <TeamCard 
        
        name="Md. Mynuddin"
        title="Executive Officer (Agency)"
        img={Member16}
        mail="Email: agency@naafmarine.com"
        mob="Mob: +8801886406122"
      />
      <TeamCard 
        
        name="Md. Mehedi Hasan Shahed"
        title="Executive Officer (Agency & Crewing)"
        img={Member17}
        mail="Email: agency@naafmarine.com"
        mob="Mob: +8801821537067"
      />
      <TeamCard 
        
        name="Ashraful Alam (Tanvir)"
        title="Office Assistance"
        img={Member18}
        mob="Mob: +8801533409144"
      />
      <TeamCard 
        
        name="Yasin Taha"
        title="Office Assistance"
        img={Member19}
        mob="Mob: +8801861705024"
      />
      </section>
    </div>
  );
};

export default OurTeam;
