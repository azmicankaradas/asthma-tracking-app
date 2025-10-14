# UI Components Documentation

## Core Components

### 1. ProgressBar

A minimal, animated progress indicator that shows onboarding completion status.

```typescript
interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  height?: number;
  animated?: boolean;
}
```

### 2. QuestionCard

The main container for questions and inputs.

```typescript
interface QuestionCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  animation?: "fade" | "slide" | "none";
}
```

### 3. ChoiceButton

Customizable button for single/multiple choice questions.

```typescript
interface ChoiceButtonProps {
  label: string;
  icon?: string;
  selected?: boolean;
  onPress: () => void;
  variant?: "primary" | "secondary";
}
```

### 4. SliderInput

Custom slider for range-based questions.

```typescript
interface SliderInputProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  labels?: string[];
  onChange: (value: number) => void;
}
```

### 5. NavigationButton

Standard navigation buttons for the flow.

```typescript
interface NavigationButtonProps {
  direction: "next" | "back";
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}
```

## Layout Components

### 1. SafeContainer

Base container with safe area handling.

```typescript
interface SafeContainerProps {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: number;
}
```

### 2. KeyboardAwareView

Handles keyboard appearance and scrolling.

```typescript
interface KeyboardAwareViewProps {
  children: React.ReactNode;
  behavior?: "padding" | "height" | "position";
}
```

### 3. AnimatedTransition

Handles screen transitions and animations.

```typescript
interface AnimatedTransitionProps {
  children: React.ReactNode;
  type: "fade" | "slide" | "scale";
  duration?: number;
}
```

## Form Components

### 1. TextInput

Styled text input with validation.

```typescript
interface TextInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  error?: string;
  type?: "text" | "email" | "password" | "number";
}
```

### 2. DatePicker

Custom date picker for birth date and diagnosis date.

```typescript
interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}
```

### 3. MultiSelect

Component for selecting multiple options.

```typescript
interface MultiSelectProps {
  options: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  selected: string[];
  onChange: (selected: string[]) => void;
}
```

## Feedback Components

### 1. Toast

Non-intrusive feedback messages.

```typescript
interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}
```

### 2. LoadingIndicator

Minimal loading animations.

```typescript
interface LoadingIndicatorProps {
  size?: "small" | "large";
  color?: string;
  message?: string;
}
```

### 3. ErrorMessage

Styled error display component.

```typescript
interface ErrorMessageProps {
  message: string;
  action?: {
    label: string;
    onPress: () => void;
  };
}
```

## Theme Constants

### Colors

```typescript
const colors = {
  primary: {
    dark: "#1A1A2E",
    main: "#2C7873",
    light: "#7B9FF2",
  },
  text: {
    primary: "#E0E0E0",
    secondary: "#B0B0B0",
    disabled: "#707070",
  },
  background: {
    default: "#121212",
    paper: "#1E1E1E",
  },
  status: {
    success: "#4CAF50",
    error: "#FF5252",
    warning: "#FFC107",
    info: "#2196F3",
  },
};
```

### Typography

```typescript
const typography = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
};
```

### Spacing

```typescript
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
```

### Animations

```typescript
const animations = {
  default: {
    duration: 300,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  },
  fast: {
    duration: 150,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  },
  slow: {
    duration: 450,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  },
};
```

## Usage Examples

### Question Screen Template

```typescript
function QuestionScreen({
  question,
  onAnswer,
  onNext,
  onBack,
}: QuestionScreenProps) {
  return (
    <SafeContainer>
      <ProgressBar progress={question.progress} />
      <QuestionCard title={question.title}>
        {question.type === "choice" && (
          <ChoiceButton
            label={question.options[0]}
            onPress={() => onAnswer(question.options[0])}
          />
        )}
        <NavigationButton
          direction="next"
          onPress={onNext}
          disabled={!question.answered}
        />
      </QuestionCard>
    </SafeContainer>
  );
}
```

### Form Screen Template

```typescript
function FormScreen({ onSubmit }: FormScreenProps) {
  return (
    <KeyboardAwareView>
      <SafeContainer>
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <DatePicker
          label="Birth Date"
          value={birthDate}
          onChange={setBirthDate}
        />
        <MultiSelect
          options={symptoms}
          selected={selectedSymptoms}
          onChange={setSelectedSymptoms}
        />
      </SafeContainer>
    </KeyboardAwareView>
  );
}
```
