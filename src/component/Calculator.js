import React, { useRef,useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'

function Calculator() {
    const heightRef = useRef();
    const weightRef = useRef();
    const formRef = useRef();
    const [result,setResult] = useState(0);
    const [info,setInfo] = useState("");

    const handleSubmit = (e) =>{
        const w = weightRef.current.value;
        const h = heightRef.current.value;
        const bmi = (w/Math.pow((h/100),2)).toFixed(2);
        e.preventDefault();
        setResult(bmi);
        console.log(bmi);

        if(bmi < 18.5){
            setInfo("Underweight range")
        }
        else if(bmi<24.9 && bmi>=18.5)
        {
            setInfo("Healthy weight range");
        }
        else if(bmi>25 && bmi <29.9){
            setInfo("Overweight range");
        }
        else if(bmi>=30){
            setInfo("Obese range")
        }
    }

    const handleReset = () => {
        setInfo("");
        formRef.current.reset();
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">BMI Calculator</h2>
                    {info && <Alert variant="info">Your BMI is:{result} {info}</Alert>}
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Form.Group id="height" >
                            <Form.Label>Your Height</Form.Label>
                            <Form.Control ref={heightRef} type="number" placeholder="Enter your height in cm" required />
                        </Form.Group>

                        <Form.Group id="weight" >
                            <Form.Label>Your Weight</Form.Label>
                            <Form.Control ref={weightRef} type="number" placeholder="Enter your weight in kg" required />
                        </Form.Group>
                        
                        <Button className="w-100" type="submit" >Calculate</Button>

                        <Button className="mt-3 w-100" onClick={handleReset}  >Reset</Button>

                    </Form>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Calculator
