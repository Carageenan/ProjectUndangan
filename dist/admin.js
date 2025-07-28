(()=>{async function d(){let n=document.getElementById("list-undangan");if(!n){console.error("Element with id list-undangan not found");return}try{let e=await(await fetch("http://localhost:3000/undangan")).json();n.innerHTML="",e.forEach(t=>{let a=document.createElement("div");a.classList.add("undangan-item","mb-3","p-2","border","rounded"),a.innerHTML=`
                <h5>${t.title}</h5>
                <p><strong>Date:</strong> ${t.date}</p>
                <p><strong>Location:</strong> ${t.location}</p>
            `,n.appendChild(a)})}catch(o){console.error("Error fetching undangan:",o),n.innerHTML="<p>Failed to load undangan data.</p>"}}window.addEventListener("DOMContentLoaded",d);})();
