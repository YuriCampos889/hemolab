import React, { useState, useRef } from 'react';
import { User, Pencil, Shield } from 'lucide-react';

import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import BackToTop from '../../components/layout/BackToTop';

import {
  ProfileWrapper,
  AvatarSection,
  AvatarContainer,
  EditBadge,
  FormSection,
  HeaderInfo,
  NameEmailGroup,
  NameGroup,
  UserEmail,
  JoinDate,
  FormRow,
  SelectWrapper,
  SettingsBlock,
  SettingsHeader
} from './styles';

export default function ProfileScreen() {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: 'User Name',
    country: 'Brazil',
    institution: 'Institution',
    role: 'Role'
  });
  
  const userEmail = 'name@example.com'; 

  const [avatarImg, setAvatarImg] = useState(null);
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleEditAvatar = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setAvatarImg(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <PageLayout>
      <Card padding="2.5rem" style={{ minHeight: '46.875rem' }}>
        <Title underline>User Profile</Title>

        <ProfileWrapper>
          
          <AvatarSection>
            <div style={{ position: 'relative' }}>
              <AvatarContainer>
                {avatarImg ? (
                  <img src={avatarImg} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <User size={80} strokeWidth={1.5} />
                )}
              </AvatarContainer>
              <EditBadge title="Change photo" onClick={handleEditAvatar}>
                <Pencil size={14} />
              </EditBadge>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
              />
            </div>
          </AvatarSection>

          <FormSection>
            
            {/* PERSONAL INFO */}
            <SettingsBlock>
              <SettingsHeader><User size={18} /> Personal Information</SettingsHeader>
              
              <HeaderInfo>
                <NameEmailGroup>
                  <NameGroup>
                    <h3>{formData.name}</h3>
                  </NameGroup>
                  <UserEmail>{userEmail}</UserEmail>
                </NameEmailGroup>
                
                <JoinDate>Joined: May 8, 2026</JoinDate>
              </HeaderInfo>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.2rem' }}>
                <SelectWrapper>
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country" value={formData.country} onChange={handleChange}>
                    <option value="Brazil">Brazil</option>
                    <option value="United States">United States</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Other">Other</option>
                  </select>
                </SelectWrapper>

                <FormRow>
                  <Input 
                    label="Institution"
                    name="institution"
                    type="text"
                    value={formData.institution}
                    onChange={handleChange}
                    uppercaseLabel
                  />
                  <Input 
                    label="Role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    uppercaseLabel
                  />
                </FormRow>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <Button variant="primary" style={{ minWidth: '10rem' }}>
                  Save Changes
                </Button>
              </div>
            </SettingsBlock>

            {/* SEÇÃO DE SEGURANÇA */}
            <SettingsBlock>
              <SettingsHeader><Shield size={18} /> Security</SettingsHeader>
              <FormRow style={{ marginTop: '0.5rem' }}>
                <Input 
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  uppercaseLabel
                />
                <Input 
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  uppercaseLabel
                />
              </FormRow>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <Button variant="outline" style={{ minWidth: '10rem' }}>
                  Save Password
                </Button>
              </div>
            </SettingsBlock>

          </FormSection>
        </ProfileWrapper>
      </Card>
      
      <BackToTop />
    </PageLayout>
  );
}