import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { general } from '../../styles';

export const PageContainer = ({ children }) => (
  <View style={{ flex: 1 }}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'position' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={general.pageContainer}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
);
