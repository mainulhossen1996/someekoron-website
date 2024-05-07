import React, { useState } from 'react';
import arrowUp from "../assets/images/homes/arrow-up.svg"
import arrowDown from "../assets/images/homes/arrow-down.svg"

const FAQ = () => {

  return (
    <div className="faq-accordion mb-5">
<details>
  <summary>
  What forms of payment do you accept?
    <img className="control-icon control-icon-expand acc-icon" src={arrowDown}/>
    <img className="control-icon control-icon-close acc-icon" src={arrowUp}/>
   </summary>
  <p>Totally. Totally does.</p>
</details>

<details>

  <summary>
  Is the Free Forever Plan really free? Are there any costs?
    <img className="control-icon control-icon-expand acc-icon" src={arrowDown}/>
    <img className="control-icon control-icon-close acc-icon" src={arrowUp}/>
 </summary>
  <p>Of course you can, we won't stop you.</p>
</details>



<details>
  <summary>
  Can I upgrade myself or do I have to upgrade my entire Workspace?
    <img className="control-icon control-icon-expand acc-icon" src={arrowDown}/>
    <img className="control-icon control-icon-close acc-icon" src={arrowUp}/>
   </summary>
  <p>Only your imagination my friend. Go forth!</p>
</details>

<details>
  <summary>
  How does the annual subscription work?
    <img className="control-icon control-icon-expand acc-icon" src={arrowDown}/>
    <img className="control-icon control-icon-close acc-icon" src={arrowUp}/>
   </summary>
  <p>Only your imagination my friend. Go forth!</p>
</details>

<details>
  <summary>
  Do I get a refund when I cancel my subscription?
    <img className="control-icon control-icon-expand acc-icon" src={arrowDown}/>
    <img className="control-icon control-icon-close acc-icon" src={arrowUp}/>
   </summary>
  <p>Only your imagination my friend. Go forth!</p>
</details>

<details>

  <summary>
  What happens when I hit my usage limits?
    <img className="control-icon control-icon-expand acc-icon" src={arrowDown}/>
    <img className="control-icon control-icon-close acc-icon" src={arrowUp}/>
 </summary>
  <p>Of course you can, we won't stop you.</p>
</details>

    </div>
  );
};

export default FAQ;
