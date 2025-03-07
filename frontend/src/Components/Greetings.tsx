import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export const Greetings = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = async () => {
    if (!name) return;
    try {
      const response = await fetch(`http://localhost:8080/api/greet?name=${name}`);
      const data = await response.json();
      setGreeting(data.message);
    } catch (error) {
      console.error("Error fetching greeting:", error);
      setGreeting("Failed to fetch greeting.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <TextField 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Button onClick={handleSubmit} type='submit' variant="contained" color="primary">Get Greeting</Button>
        {greeting && <Typography variant="h6">{greeting}</Typography>}
    </div>
  );
};
