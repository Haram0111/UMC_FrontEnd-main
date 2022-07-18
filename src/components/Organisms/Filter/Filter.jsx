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
        setCardInfo(result.data.result);
        })
        .catch((err) => {console.log(err)});
    }, []);

    console.log(cardInfo);

    return(
        <>
        <Form.Select onChange={(e) => setIntype(e.target.value)}>
          <option value="All">전체</option>
          <option value="charge">유료</option>
          <option value="free">무료</option>
        </Form.Select>        
        <Form.Select onChange={(e) => setIntype(e.target.value)}>
          <option value="All">최신순</option>
          <option value="charge">인기순</option>
        </Form.Select>        
        <Form.Select onChange={(e) => setIntype(e.target.value)}> 
          <option value="All">테마별</option>
          <option value="charge">테마</option>
          <option value="free">테마</option>
        </Form.Select>        
        <Form.Select onChange={(e) => setIntype(e.target.value)}> 
          <option value="All">장소별</option>
          <option value="charge">자동차</option>
          <option value="free">어딘가</option>
        </Form.Select>        
        <div className="grid">
          {
            cardInfo&&cardInfo.map((i,a)=>{
              if(Intype === "All"){
                return(
                  <Card style={{ width: '18rem' }} className="box">
                    <Card.Img variant="top" src={i.image_url} />
                    <Card.Body>
                    <Card.Title>{i.description}</Card.Title>
                    <Card.Text>
                        {i.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              }
              else{
                if(Intype === i.type){
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