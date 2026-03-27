# Task 5: Angular Concepts

## 1. SPA vs MPA

### SPA (Single Page Application)
- Loads one HTML page and updates content dynamically without full page reloads
- Example: Angular, React, Vue apps
- Pros: Fast navigation, smooth user experience, less server load
- Cons: Larger initial download, difficult SEO, more complex

### MPA (Multiple Page Application)
- Each page is a separate HTML file; browser reloads entire page for navigation
- Example: Traditional PHP, ASP.NET websites
- Pros: Better SEO, smaller initial load, simpler
- Cons: Slower navigation, more server load, less responsive

**Simple Comparison**: SPA = loads once, updates dynamically | MPA = reloads every page

---

## 2. MVC vs MVVM in Angular

### MVC (Model-View-Controller)
- **Model**: Data & business logic
- **View**: UI display
- **Controller**: Handles user input, updates Model
- One-way: Controller → Model → View
- Views tightly coupled with Controllers

### MVVM (Model-View-ViewModel)
- **Model**: Data & business logic
- **View**: UI display
- **ViewModel**: Component logic, bridges View & Model
- Two-way: View ↔ ViewModel ↔ Model
- Views decoupled from business logic

### Angular Uses MVVM
- `.ts` file = ViewModel (component class with properties/methods)
- `.html` file = View (template)
- Service = Model (data/business logic)
- Two-way data binding with `[(ngModel)]`

**Simple Difference**: MVC has one-way flow; MVVM has two-way binding

---

## 3. Component File Purposes

### .ts File (Component Logic)
Contains component logic: properties, methods, lifecycle hooks, dependency injection
```typescript
export class StudentComponent {
  students = [];
  
  loadStudents() { }
}
```

### .html File (Template/View)
Displays UI with data binding, directives, and event handling
```html
<p>Name: {{ student.name }}</p>
<button (click)="loadStudents()">Load</button>
```

### .css File (Styling)
Styles the component with CSS rules
```css
.student { color: blue; }
```

### .spec.ts File (Unit Tests)
Tests component methods and behavior
```typescript
it('should load students', () => {
  component.loadStudents();
  expect(component.students.length).toBe(2);
});
```

**Relationship**: .ts controls logic → binds data to .html → styled by .css → tested in .spec.ts

---

## 4. Interpolation

**What**: Angular syntax to display component data in HTML using `{{ }}`

**Syntax**: `{{ expression }}`

### Examples

```typescript
// Component
name = 'John';
age = 25;
price = 100;
quantity = 3;
```

```html
<!-- Simple property -->
<p>{{ name }}</p>  <!-- Output: John -->

<!-- Object property -->
<p>{{ student.email }}</p>

<!-- Method call -->
<p>{{ getAge() }}</p>

<!-- Arithmetic -->
<p>{{ price * quantity }}</p>  <!-- Output: 300 -->

<!-- String concatenation -->
<p>Welcome {{ firstName }} {{ lastName }}</p>

<!-- Ternary operator -->
<p>{{ age >= 18 ? 'Adult' : 'Child' }}</p>

<!-- Array access -->
<p>{{ items[0] }}</p>
```

### Key Points
- **One-way binding**: Component → View only
- Expressions are evaluated and converted to strings
- Use pipes for formatting: `{{ date | date:'shortDate' }}`
- Keep expressions simple for performance
- Use `?.` for safe navigation: `{{ user?.name }}`

