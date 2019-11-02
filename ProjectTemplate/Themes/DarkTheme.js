const _darktThemeStyling={
    backgroundColor:"#2A2C5A",
    flex:1,
    
}
const _textStyles={
    color:"white",
    fontSize: 18,
}  
const  _header={
    color:"#B4C0C2",
    fontSize:25,
    fontWeight:'bold'
}
let Themes={
    theme:function getTheme()
            {
                return _darktThemeStyling;
            },
    text:function getText()
    {
        return _textStyles;
    },
    header: function getHeader()
    {
        return _header;
    },      
}
export default Themes;