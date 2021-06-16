import React, { useContext, useState } from 'react';

import { Text, LanguageContext } from '../containers/Language';

const selectOptions = ['option1', 'option2', 'option3', 'option4'];

export default function Explore() {
  const [clickText, setClickText] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);

  // const handleClick = () => {
  //   setClickText(<Text tid="buttonClicked" />);
  // }

  // const handleOptionChange = e => {
  //   setSelectedOption(e.target.value);
  // }

  return (
    <div>
<table>
<tr>
    <th><Text tid="houseId"/></th>
    <th><Text tid="starLord"/></th>
    <th><Text tid="signLord"/></th>
  </tr>
  <tr>
    <td><Text tid="1"/></td>
    <td><Text tid="mercury"/></td>
    <td><Text tid="rahu"/></td>
  </tr>

  <tr>
    <td><Text tid="2"/></td>
    <td><Text tid="moon"/></td>
    <td><Text tid="saturn"/></td>
  </tr>

  <tr>
    <td><Text tid="3"/></td>
    <td><Text tid="sun"/></td>
    <td><Text tid="ketu"/></td>
  </tr>

  <tr>
    <td><Text tid="4"/></td>
    <td><Text tid="mercury"/></td>
    <td><Text tid="moon"/></td>
  </tr>

  <tr>
    <td><Text tid="5"/></td>
    <td><Text tid="venus"/></td>
    <td><Text tid="rahu"/></td>
  </tr>

  <tr>
    <td><Text tid="6"/></td>
    <td><Text tid="mars"/></td>
    <td><Text tid="mercury"/></td>
  </tr>

  <tr>
    <td><Text tid="7"/></td>
    <td><Text tid="jupiter"/></td>
    <td><Text tid="venus"/></td>
  </tr>
  <tr>
    <td><Text tid="8"/></td>
    <td><Text tid="saturn"/></td>
    <td><Text tid="moon"/></td>
  </tr>

  <tr>
    <td><Text tid="9"/></td>
    <td><Text tid="saturn"/></td>
    <td><Text tid="rahu"/></td>
  </tr>

  <tr>
    <td><Text tid="10"/></td>
    <td><Text tid="jupiter"/></td>
    <td><Text tid="saturn"/></td>
  </tr>

  <tr>
    <td><Text tid="11"/></td>
    <td><Text tid="mars"/></td>
    <td><Text tid="venus"/></td>
  </tr>

  <tr>
    <td><Text tid="12"/></td>
    <td><Text tid="venus"/></td>
    <td><Text tid="moon"/></td>
  </tr>

  
</table>
      

      

       
    </div>
  );
}

