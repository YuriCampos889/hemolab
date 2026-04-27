import { useState } from 'react';

export default function useWizard(tabsArray) {
  const [activeTab, setActiveTab] = useState(tabsArray[0]);
  
  const [savedTabs, setSavedTabs] = useState(() => {
    return tabsArray.reduce((acc, tab) => ({ ...acc, [tab]: false }), {});
  });

  const handleSave = () => {
    setSavedTabs(prev => ({ ...prev, [activeTab]: true }));
  };

  const handleNext = () => {
    const currentIndex = tabsArray.indexOf(activeTab);
    if (currentIndex < tabsArray.length - 1) {
      setActiveTab(tabsArray[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = tabsArray.indexOf(activeTab);
    if (currentIndex > 0) {
      const prevTab = tabsArray[currentIndex - 1];
      setActiveTab(prevTab);
      setSavedTabs(prev => ({ ...prev, [prevTab]: false }));
    }
  };

  const resetWizard = () => {
    setActiveTab(tabsArray[0]);
    setSavedTabs(tabsArray.reduce((acc, tab) => ({ ...acc, [tab]: false }), {}));
  };

  const isFirstTab = activeTab === tabsArray[0];
  const isSubmitTab = activeTab === tabsArray[tabsArray.length - 1];
  const isCurrentSaved = savedTabs[activeTab] || false;

  return {
    activeTab,
    savedTabs,
    isFirstTab,
    isSubmitTab,
    isCurrentSaved,
    handleSave,
    handleNext,
    handleBack,
    resetWizard
  };
}