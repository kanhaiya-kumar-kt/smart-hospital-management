// import React from "react";

// const OAuthLogin = () => {
//   const backendBaseUrl = "http://localhost:8080";

//   const providers = [
//     { name: "GitHub", url: `${backendBaseUrl}/oauth2/authorization/github` },
//     { name: "Google", url: `${backendBaseUrl}/oauth2/authorization/google` },
//     { name: "Twitter", url: `${backendBaseUrl}/oauth2/authorization/twitter` }
//   ];

//   const handleLogin = (url) => {
//     window.location.href = url; // redirect to Spring Boot OAuth2
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login with OAuth 2.0</h2>

//       {providers.map((provider) => (
//         <button
//           key={provider.name}
//           onClick={() => handleLogin(provider.url)}
//           style={styles.button}
//         >
//           Continue with {provider.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "60px auto",
//     padding: "20px",
//     textAlign: "center",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     fontFamily: "Arial"
//   },
//   button: {
//     display: "block",
//     width: "100%",
//     padding: "12px",
//     margin: "10px 0",
//     fontSize: "15px",
//     borderRadius: "6px",
//     border: "none",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     cursor: "pointer"
//   }
// };

// export default OAuthLogin;
