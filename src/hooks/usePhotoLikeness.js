import { useState, useEffect } from "react";

const PHOTO_LIKENESS_PHRASES = [
  "Exact Likeness Created From Your Photograph",
  "Custom Sculpted Directly From Your Photo",
  "Precision-Crafted From Your Exact Image",
  "Personalized From Your Submitted Photograph",
  "Authentic Likeness Created From Photos",
  "Designed Using Your Exact Photograph",
  "Realistic Bronze Artwork From Your Image",
  "Created From Actual Submitted Photography",
  "Faithfully Recreated From Your Photograph",
  "Custom Bronze Recognition From Your Photo",
];

// Deterministic per-session pick based on current minute — rotates every session
function pickPhrase() {
  const index = Math.floor(Date.now() / 1000 / 60) % PHOTO_LIKENESS_PHRASES.length;
  return PHOTO_LIKENESS_PHRASES[index];
}

export function usePhotoLikeness() {
  const [phrase, setPhrase] = useState(() => pickPhrase());

  useEffect(() => {
    // Refresh each time the component mounts (new page visit = new phrase)
    setPhrase(pickPhrase());
  }, []);

  return phrase;
}