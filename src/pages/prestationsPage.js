import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Page from './page'
import { Row, Col } from 'antd';
import { Collapse, Icon, Select, Table, Divider, Tag  } from 'antd';
import PrestationsContainer from '../components/Prestations/prestationsContainer';
import { CartContainer } from "../components/Cart/cartContainer";

const { Column, ColumnGroup } = Table;
const { Panel } = Collapse;
const { Option } = Select;


const displayCentsToEuro = cents =>
  (cents / 100).toLocaleString("fr", { style: "currency", currency: "EUR" });

const convertMinutesToHours = minutes => {
  const minutesModulo60 = minutes % 60;
  const hours = (minutes - minutesModulo60) / 60;

  return `${hours}h${minutesModulo60}min`;
};


const data = [
    {
      "reference": "man_shampoo",
      "title": "Shampoing",
      "duration": convertMinutesToHours(10),
      "price": displayCentsToEuro(500)
    },
    {
      "reference": "man_haircut",
      "title": "Coupe",
      "duration": convertMinutesToHours(30),
      "price": displayCentsToEuro(2690)
    },
    {
      "reference": "man_color",
      "title": "Couleur",
      "duration": convertMinutesToHours(45),
      "price": displayCentsToEuro(2900)
    },
    {
      "reference": "beard_trim",
      "title": "Taille de la barbe",
      "duration": convertMinutesToHours(15),
      "price": displayCentsToEuro(2000)
    },
    {
      "reference": "beard_shave",
      "title": "Rasage",
      "duration": convertMinutesToHours(15),
      "price": displayCentsToEuro(2000)
    }
];


function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const PrestationsPage = props => {


  const initialBagState = {
    count: 100
  }
  const [count, setCount] = useState(100)


  console.log('count', count )

  return (
    <Page>

      <div className="gutter-example">
        <Row gutter={24}>
          <Col>
          {'Choix des prestations :'}
            <PrestationsContainer/>
          </Col>
          <Col>
            <CartContainer />
          </Col>
        </Row>
      </div>
    </Page>
  );
};

PrestationsPage.propTypes = {
  
};

export default PrestationsPage;


/** 
 * 
 * 
 * 
 * {
    "reference": "haircut",
    "title": "Coiffure",
    "categories": [
        {
            "reference": "man",
            "title": "Homme",
            "prestations": [
                {
                    "reference": "man_shampoo",
                    "title": "Shampoing",
                    "duration": 10,
                    "price": 500
                },
                {
                    "reference": "man_haircut",
                    "title": "Coupe",
                    "duration": 30,
                    "price": 2690
                },
                {
                    "reference": "man_color",
                    "title": "Couleur",
                    "duration": 45,
                    "price": 2900
                },
                {
                    "reference": "beard_trim",
                    "title": "Taille de la barbe",
                    "duration": 15,
                    "price": 2000
                },
                {
                    "reference": "beard_shave",
                    "title": "Rasage",
                    "duration": 15,
                    "price": 2000
                }
            ]
        },
        {
            "reference": "woman",
            "title": "Femme",
            "prestations": [
                {
                    "reference": "woman_shampoo",
                    "title": "Shampoing",
                    "duration": 10,
                    "price": 400
                },
                {
                    "reference": "woman_haircare",
                    "title": "Soin profond",
                    "duration": 10,
                    "price": 1000
                },
                {
                    "reference": "woman_haircut",
                    "title": "Coupe classique",
                    "duration": 30,
                    "price": 2990
                },
                {
                    "reference": "creative_haircut",
                    "title": "Coupe création",
                    "duration": 45,
                    "price": 3990
                },
                {
                    "reference": "brushing",
                    "title": "Brushing (courts et mi-longs)",
                    "duration": 20,
                    "price": 2990
                },
                {
                    "reference": "brushing_long_hair",
                    "title": "Brushing (longs)",
                    "duration": 40,
                    "price": 3990
                },
                {
                    "reference": "woman_color",
                    "title": "Couleur (racines)",
                    "duration": 45,
                    "price": 6090
                },
                {
                    "reference": "woman_fullcolor",
                    "title": "Couleur complète",
                    "duration": 75,
                    "price": 8090
                },
                {
                    "reference": "tie_and_dye",
                    "title": "Ombré hair",
                    "duration": 90,
                    "price": 9090
                },
                {
                    "reference": "woman_streaks",
                    "title": "Mèches",
                    "duration": 120,
                    "price": 8090
                },
                {
                    "reference": "woman_hair_highlighting",
                    "title": "Balayage",
                    "duration": 120,
                    "price": 8090
                },
                {
                    "reference": "haircare_patina",
                    "title": "Patine",
                    "duration": 15,
                    "price": 1990
                },
                {
                    "reference": "complex_brushing",
                    "title": "Brushing élaboré",
                    "duration": 40,
                    "price": 3990
                },
                {
                    "reference": "evening_brushing",
                    "title": "Coiffure de soirée (chignon, tresses, attaches…)",
                    "duration": 45,
                    "price": 5990
                },
                {
                    "reference": "sophisticated_hairdressing",
                    "title": "Coiffure de mariée",
                    "duration": 90,
                    "price": 9900
                },
                {
                    "reference": "hairdressing_bride_with_test",
                    "title": "Coiffure de mariage avec essai",
                    "duration": 90,
                    "price": 21900
                },
                {
                    "reference": "brazilian_smoothing",
                    "title": "Lissage brésilien",
                    "duration": 180,
                    "price": 19900
                }
            ]
        },
        {
            "reference": "child",
            "title": "Enfant",
            "prestations": [
                {
                    "reference": "child_haircut",
                    "title": "Coupe",
                    "duration": 20,
                    "price": 1990
                },
                {
                    "reference": "child_hairdressing",
                    "title": "Coiffure enfant (chignon, tresse, attache...)",
                    "duration": 30,
                    "price": 3990
                }
            ]
        }
    ]
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/