"use client";

import { Component } from "react";
import styles from "../components/UserProfile.module.css";

interface UserProfileProps {
  username: string;
  email: string;
}

class UserProfile extends Component<UserProfileProps> {
  constructor(props: UserProfileProps) {
    super(props);
  }

  render() {
    const { username, email } = this.props;

    return (
      <div className={styles.userProfile}>
        <h2 className={styles.profileCard}>User Profile</h2>
        <div className={styles.infoItem}>
          <span className={styles.label}>Username:</span>
          <span className={styles.label}>{username}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>{email}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
