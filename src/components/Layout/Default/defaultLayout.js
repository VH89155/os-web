import './deafault.css'


const Default = ({children}) => {
    return (  
        <>
        <div className="App">
        <header>
        {children}
        </header>
        </div>
        </>
    );
}
 
export default Default;