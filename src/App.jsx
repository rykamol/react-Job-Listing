import React from 'react'
const App = () => {

    const name = 'kamol';
    const x = 55;
    const y = 45;
    const names = ['kamol', "marry", 'joe', 'sara'];
    const loggedIn = true;
    const styles = {
        color: 'red',
        fontSize: '55px'
    }

    // if(loggedIn){
    //     return <h1>Hello Member</h1>
    // }

    return (
        <>
            <div className='text-5xl'>App</div>
            <p style={styles}> Hello {name}</p>
            <p>The sum of {x} and {y} is {x + y}</p>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

            {loggedIn && <h1>Hello Members</h1>}
        </>
    )
}

export default App