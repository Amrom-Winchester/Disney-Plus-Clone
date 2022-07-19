import styled from "styled-components";
import ImgSlider from "./Imgslider";
import NewDisney from "./NewOnDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { db } from "../firebase";
import { setMovies } from "../Features/Movie/movieSlice";
import { doc , unsub , collection , query , where , onSnapShot , getDocs } from "firebase/firestore";
import { selectUserName } from "../Features/User/userSlice";

const Home = (props) => {
    
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    let recommends = [];
    let newTDisney = [];
    let originals = [];
    let trending = [];

    useEffect(()=>{

        async function fetchdata(db) {
            const querySnapshot = await getDocs(collection(db, "Movies"));
            querySnapshot.forEach((doc) => {
                switch(doc.data().type){
                    case "recommend" : 
                        recommends = [...recommends, {id: doc.id,...doc.data()}];
                        break;
                    case "new" : 
                        newTDisney = [...newTDisney, {id: doc.id,...doc.data()}];
                        break;
                    case "trending" : 
                        trending = [...trending, {id: doc.id,...doc.data()}];
                        break;
                    case "original" : 
                        originals = [...originals, {id: doc.id,...doc.data()}];
                        break;
                    }
            });
            dispatch( setMovies({
                recommend: recommends,
                newDisney: newTDisney,
                trending: trending,
                original: originals,
            })
            );
            }

            fetchdata(db);
        
    },[username])

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    )
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px); 
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url("../Images/home-background.png") center center / cover 
            no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;