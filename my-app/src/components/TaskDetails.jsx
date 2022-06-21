import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    
    return ( 
        <div>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>

            <div className="task-details-container">
                
                <h2>{params.TaskTitle}</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam veniam aperiam aliquam? Placeat aut laudantium repellat odit ea, quo enim corrupti ratione, commodi temporibus est. Autem velit corporis odit. Officia!
                </p>
            </div>

        </div>
     );
}
 
export default TaskDetails;