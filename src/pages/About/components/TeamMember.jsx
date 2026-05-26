import React from 'react';
import { MemberCard, Avatar, MemberInfo } from '../styles';

export default function TeamMember({ initials, name, role }) {
  return (
    <MemberCard>
      <Avatar>{initials}</Avatar>
      <MemberInfo>
        <strong>{name}</strong>
        <span>{role}</span>
      </MemberInfo>
    </MemberCard>
  );
}