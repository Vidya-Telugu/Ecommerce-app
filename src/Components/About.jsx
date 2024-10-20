import React, { Fragment } from 'react'
import BandImage from "../assets/BandImage.png"
import { Container,Image} from 'react-bootstrap'
import Navigation from './Navigation'
import Header from './Header'
function About() {
  return (
        <Fragment>
        <Navigation></Navigation>
        <Header></Header>
        <Image className=" d-flex-column ml-20 float-start ms-3 m-5"src={BandImage} style={{borderRadius:50}} width="300" height="250"/>
        <p style={{fontStyle:"italic",color:'gray',margin:30}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus in perferendis sequi ipsa impedit reprehenderit voluptates quia, possimus eius commodi dolorem repudiandae sed recusandae tempora quae esse sunt asperiores et?
        Sed expedita illo maiores officia facilis illum ab in voluptatibus fugit, animi possimus commodi cum similique rem dolores assumenda beatae necessitatibus nemo aspernatur sunt? Repellendus necessitatibus minima maiores sunt tempore?
        Consequuntur molestiae nobis voluptates eius, itaque atque ducimus facilis officiis illo iure molestias facere quisquam repudiandae incidunt eveniet doloremque impedit consequatur! Voluptatum, magnam ipsam aut modi fugiat ipsum officia perferendis!
        Accusamus adipisci velit veniam, deleniti dicta libero nisi aut error fugiat ut dolorem hic reprehenderit nostrum, excepturi iure distinctio natus porro voluptatibus cumque qui quaerat? Obcaecati, magni? Esse, porro officia.
        Sapiente asperiores repellendus amet saepe magni sequi et sed labore totam quos. Id eaque nam dolor, odit iure architecto eius reprehenderit enim nisi praesentium harum hic veritatis distinctio nihil impedit?
        Quasi quidem voluptate minus repudiandae vel consequatur maiores beatae facilis numquam. Alias sit et vel officiis. Saepe eum labore ipsum quis non. Repudiandae animi saepe sit, suscipit dolore eveniet ut!
        Vitae explicabo, quo possimus modi quod quae optio perferendis consequuntur, officia nemo magni consectetur nisi assumenda nulla. Ex illum veritatis ab aspernatur qui eligendi est? Labore hic at eaque beatae.
        Distinctio consequatur veniam sed incidunt hic aperiam modi possimus est, eos dolor excepturi obcaecati, repellat, quidem dolore dignissimos repudiandae nulla minus. Nulla, ut impedit eligendi officiis non voluptas cupiditate eum!
        Obcaecati nemo eum deserunt at culpa? Animi officia aliquid, consequuntur qui ea molestiae reprehenderit unde aut quis deserunt facere dolore deleniti, temporibus quia sequi. Numquam deleniti et deserunt cum ut.
        Amet, quaerat reprehenderit hic repellendus commodi est, inventore facilis quos neque officia quibusdam cumque error odio eligendi? Id ea aperiam cum et? Odit officiis consequatur placeat? Architecto accusantium eligendi deserunt.</p>
        </Fragment>
  )
}

export default About
