export default function Loading({ width , height , size , margin , borderRadius}){
    return <div 
    style={{
        width : width,
        height : height,
        margin : margin,
        borderRadius : borderRadius,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        boxShadow : "0 0 12px 0 gray"
    }}>
        <div 
            className="loading"
            style={{
                position : "absolute",
                width : `${size}px`,
                aspectRatio : "1/1",
                borderRadius : "50%",
                backgroundImage : "conic-gradient(white , gray)"
            }}
        />
        <div 
            style={{
                position : "absolute",
                width : `${size - 4}px`,
                aspectRatio : "1/1",
                borderRadius : "50%",
                backgroundColor : "white"
            }}
        />
    </div>
}