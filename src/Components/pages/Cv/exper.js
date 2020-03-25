import React from 'react'

const exp=()=>{
    return(
        <ul className="text-left" style={{listStyle:"none"}}>

            <li>
                <h4 className="text-danger">Üsküdar University - Teaching assistant</h4>
                <h5>2020 - Present, Istanbul</h5>
                <p>Works as a teaching assistant in my university to help explain algorithms for younger students.</p>
                <ul>
                    <h4 className="text-primary">Courses:</h4>
                    <li>
                        <h5 className="text-secondary">Software Constructions:</h5>
                        <p> (Writing Java codes of the data structures –Heaps, Trees, Linked Lists, Stacks, etc...)</p>
                    </li>
                    <li>
                        <h5 className="text-secondary">Object Oriented Programming 2:</h5>
                        <p> (OOP in C++)</p>
                    </li>
                    <li>
                        <h5 className="text-secondary">Java I for 1st year students:</h5>
                        <p> (java basics)</p>
                    </li>
                </ul>
            </li>
            <hr/>
            <li>
                <h4 className="text-danger">Al Wafa Rehabilitation Center - Helper Volunteer</h4>
                <h5>2016 – Riyadh</h5>
                <p>Helped disabled and Autistic students.</p>
            </li>
        </ul>
    )
}

export default exp