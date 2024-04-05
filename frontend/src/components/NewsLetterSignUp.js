import { useFetcher } from "react-router-dom";
import classes from "../components/NewsLetterSignUp.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  // the use of fetcher
  // used to trigger a loader or action without routing the action to which this element belong
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert("Signup successfully");
    }
  }, [data, state]);
  return (
    // the use of fetcher
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
