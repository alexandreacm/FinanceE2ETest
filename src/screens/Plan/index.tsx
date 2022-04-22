import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Option } from '../../components/Option';
import { Button } from '../../components/Button';
import { PlanInfo, PlanInfoProps } from '../../components/PlanInfo';

import { styles } from './styles';

export default function Plan() {
  const [email, setEmail] = useState<string>('');
  const [plan, setPlan] = useState<PlanInfoProps>({ name: 'Basic', value: '5.25' });
  const [emailSent, setEmailSent] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);

  function handleChangePlan(plan: string) {
    setPlan({
      name: plan === 'basic' ? 'Basic' : 'Premium',
      value: plan === 'basic' ? '5.25' : '6.99'
    });
  }

  function handleSubscribe() {
    if(email === ''){
       setValidateEmail(true);
       setEmailSent(false);
       return
    }
    setValidateEmail(false)
    setEmailSent(true);
  }

  return (
    <TouchableWithoutFeedback testID="TouchableWithoutKeyboard" onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />

        <PlanInfo
          name={plan.name}
          value={plan.value}
        />

        <View style={styles.options}>
          <Option
            testID="option-premium"
            title="Premium"
            active={plan.name === 'Premium'}
            onPress={() => handleChangePlan('premium')}
          />
          <Option
            testID="option-basic"
            title="Basic"
            active={plan.name === 'Basic'}
            onPress={() => handleChangePlan('basic')}
          />
        </View>

        <Input
          testID="input-email"
          placeholder="your email"
          required = {validateEmail}
          value={email}
          onChangeText={setEmail}
        />

        {
          emailSent &&
          <Text style={styles.confirmation} testID="confirmation-message">
            We send you a  {'\n'}
            confirmation email.
          </Text>
        }

        <Button
          testID="button-subscribe"
          title="Subscribe"
          onPress={handleSubscribe}
        />

        <Text style={styles.details} testID="plan-note">
          If the price changes, we'll notify you beforehand.
          You cam check your renewal date or cancel anytime via your Account page.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}