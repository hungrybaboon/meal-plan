import React,{ useState,useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Tdee({navigation}) {
  const [open, setOpen] = useState(false);

  const [activityvalue, setactivityValue] = useState(null);
  const [heightvalue, setHeightvalue] = useState(null);
  const [dactivity, setdActivity] = useState([
    {label: 'Sedentary (office job)', value: 1.2},
    {label: 'Light Exercise', value: 1.375},
    {label: 'Moderate Exercise', value: 1.55},
    {label: 'Heavy Exercise', value: 1.725},
    {label: 'Athlete ', value: 1.9}
  ]);
  const [heightopen, setheightOpen] = useState(false);
  const [height, setHeight] = useState([{value: 55, label:"4ft 7in"},
  {value: 56, label:"4ft 8in"},
  {value: 57, label:"4ft 9in"},
  {value: 58, label:"4ft 10in"},
  {value: 59, label:"4ft 11in"},
  {value: 60, label:"5ft 0in"},
  {value: 61, label:"5ft 1in"},
  {value: 62, label:"5ft 2in"},
  {value: 63, label:"5ft 3in"},
  {value: 64, label:"5ft 4in"},
  {value: 65, label:"5ft 5in"},
  {value: 66, label:"5ft 6in"},
  {value: 67, label:"5ft 7in"},
  {value: 68, label:"5ft 8in"},
  {value: 69, label:"5ft 9in"},
  {value: 70, label:"5ft 10in"},
  {value: 71, label:"5ft 11in"},
  {value: 72, label:"6ft 0in"},
  {value: 73, label:"6ft 1in"},
  {value: 74, label:"6ft 2in"},
  {value: 75, label:"6ft 3in"},
  {value: 76, label:"6ft 4in"},
  {value: 77, label:"6ft 5in"},
  {value: 78, label:"6ft 6in"},
  {value: 79, label:"6ft 7in"},
  {value: 80, label:"6ft 8in"},
  {value: 81, label:"6ft 9in"},
  {value: 82, label:"6ft 10in"},
  {value: 83, label:"6ft 11in"},
  {value: 84, label:"7ft 0in"}]);
  const [exclusionopen, setExclusionopen] = useState(false);
  const [exclusionvalue, setExclusionvalue] = useState(null);
  const [exclusion, setExclusion] = useState([
    {label: 'Chicken', value:'Chicken'},
    {label: 'Peanuts', value: 'Peanuts'},
    {label: 'Beef', value: 'Beef'},
    {label: 'Pork', value: 'Pork'},
    {label: 'Vegetables', value:'Vegetables'}
  ]);
  const onExclusionOpen = useCallback(() => {
    setOpen(false);
    setheightOpen(false);
  }, []);
  const onHeightOpen = useCallback(() => {
    setOpen(false);
    setExclusionopen(false);
  }, []);

  const onActivityOpen = useCallback(() => {
    setheightOpen(false);
    setExclusionopen(false);
  }, []);


  const TdeeSchema = Yup.object().shape({
    age: Yup.number()
    .required("Please supply your age")
    .min(14, "You must be at least 18 years")
    .max(60, "You must be at most 60 years"),
    weight: Yup.number()
    .required("Weight is required")
    .min(50, "You must be at least 50 lbs")
    .max(450, "Weight limit is 450 lbs")
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    setFieldValue,
    errors,
    touched
  } = useFormik({
    validationSchema: TdeeSchema,
    initialValues: { age: '', height: '',weight:'',activity:'',exclusion:''},
    
    onSubmit:values=>{
      const {age, height, weight,activity,exclusion} = values;
      var tdee = activity*(66 + (13.7*weight*0.453592) + (5 *height*2.54)-(6.8*age));
      let protein_calorie = weight * 4.0;
      let fat_gms = weight / 2.0;
      let carb_gms = (tdee-protein_calorie-fat_gms*9)/4.0;
      let lose_value = tdee-0.2*tdee;
      let gain_value = parseFloat(tdee)+300.0;
      navigation.navigate('Bodygoals',{tdee:`${tdee}`,protein:`${weight}`,fat:`${fat_gms}`,carb:`${carb_gms}`,lose:`${lose_value}`,gain:`${gain_value}`,exclusion:`${exclusion}` })
    } 
  });
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Enter Your Information
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='human'
          placeholder='Enter your age'
          autoCapitalize='none'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('age')}
          onBlur={handleBlur('age')}
          error={errors.age}
          touched={touched.age}
        />
        {errors.age && touched.age ? <Text style={{ fontSize: 16, color: 'red' }}>{errors.age}</Text>:null}
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
      <DropDownPicker
      placeholder="Select Your Height"
      zIndex={3000}
    zIndexInverse={1000}
      style={{
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'lightgray',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.41,
      }}
      dropDownStyle={{ backgroundColor: 'white' }}
      open={heightopen}
      onOpen={onHeightOpen}
      value={heightvalue}
      items={height}
      setOpen={setheightOpen}
      setValue={setHeightvalue}
      setItems={setHeight}
      onChangeValue={(value) => {
        setFieldValue("height",`${value}`);
      }}
    />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='weight'
          placeholder='Enter your weight in (lbs)'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('weight')}
          onBlur={handleBlur('weight')}
          error={errors.weight}
          touched={touched.weight}
        />
        {errors.weight && touched.weight ? <Text style={{ fontSize: 16, color: 'red' }}>{errors.weight}</Text>:null}
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
      <DropDownPicker
      zIndex={2000}
      zIndexInverse={2000}
      placeholder="Select Activity Level"
      style={{
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'lightgray',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.41,
      }}
      dropDownStyle={{ backgroundColor: 'white' }}
      open={open}
      onOpen={onActivityOpen}
      value={activityvalue}
      items={dactivity}
      setOpen={setOpen}
      setValue={setactivityValue}
      setItems={setdActivity}
      onChangeValue={(value) => {
        setFieldValue("activity",`${value}`);
      }}
    />
    </View>
    <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
      <DropDownPicker
      placeholder="Exclude Food"
      zIndex={3000}
    zIndexInverse={1000}
      style={{
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'lightgray',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.41,
      }}
      dropDownStyle={{ backgroundColor: 'white' }}
      open={exclusionopen}
      onOpen={onExclusionOpen}
      value={exclusionvalue}
      items={exclusion}
      setOpen={setExclusionopen}
      setValue={setExclusionvalue}
      setItems={setExclusion}
      multiple={true}
      min={0}
      max={5}
      onChangeValue={(value) => {
        setFieldValue("exclusion",`${value}`);
      }}
    />
      </View>
      <Button label='Submit' onPress={handleSubmit} />
    </View>
  );
}