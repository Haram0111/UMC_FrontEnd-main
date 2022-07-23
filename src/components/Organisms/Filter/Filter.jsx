import React, { useState, useEffect }from 'react';
import {Card, Button, Container, Nav, Form} from 'react-bootstrap';
import axios from 'axios';


function Filter(){

    let [Free, setFree] = useState("All");
    let [View, setView] = useState("All");
    let [Theme, setTheme] = useState("All");
    let [Location, setLocation] = useState("All");
    let [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
    axios
        .get("https://8a951eff-db70-48f9-ab6a-54e97db1cbe9.mock.pstmn.io")
        .then((result) => {
          setCardInfo(result.data);
        })
        .catch((err) => {console.log(err)});
    }, []);

    // notes={notes.filter((note) =>
    //   note.text.toLowerCase().includes(searchText)
    // )}

    return(
        <>
        <Form.Select onChange={(e) => setFree(e.target.value)}>
          <option value="All">전체</option>
          <option value="charge">유료</option>
          <option value="free">무료</option>
        </Form.Select>        
        <Form.Select onChange={(e) => setView(e.target.value)}>
          <option value="Latest">최신순</option>
          <option value="Popularity">인기순</option>
        </Form.Select>        
        <Form.Select onChange={(e) => setTheme(e.target.value)}> 
          <option value="All">테마별</option>
          <option value="Simple">심플</option>
          <option value="Neat">깔끔</option>
        </Form.Select>        
        <Form.Select onChange={(e) => setLocation(e.target.value)}> 
          <option value="All">장소별</option>
          <option value="Car">자동차</option>
          <option value="Cafe">카페</option>
          <option value="Cafe">화장실</option>
        </Form.Select>

        <div className="grid">
          {
            cardInfo&&cardInfo.map((i,a)=>{
              if(Free === "All"){
                return(
                  <Card style={{ width: '18rem' }} className="box">
                    <Card.Img variant="top" src={i.image} />
                    <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text>
                        {i.text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              }
              else{
                if(Free === i.type){
                  return(
                    <Card style={{ width: '18rem' }} className="box">
                      <Card.Img variant="top" src={i.image} />
                      <Card.Body>
                      <Card.Title>{i.title}</Card.Title>
                      <Card.Text>
                          {i.text}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  )
                }
              }
            })
          }
        </div>
        </>
        
    )
}

export default Filter;