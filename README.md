# 🌱 Argi Shield API

Argi Shield is an agriculture AI backend API designed to help farmers with **crop prediction, fertilizer recommendation, pesticide/disease information, and agricultural product management**.

The backend is built with **Django REST Framework** and provides APIs for authentication, fertilizers, crops, pesticide history, fertilizer prediction history, and crop prediction history.

---

## 📁 Main Data Models

### 1. Perticise

Stores pesticide information.

| Field | Description |
|---|---|
| `name` | Pesticide name |
| `chemical` | Chemical composition |
| `image` | Pesticide image |
| `disease` | Disease targeted by the pesticide |
| `time_used` | Recommended usage time |
| `guide_used` | Usage guide |
| `advantage` | Benefits of the pesticide |

---

### 2. Fertilizer

Stores fertilizer/product information.

| Field | Description |
|---|---|
| `brand_name` | Fertilizer brand |
| `product_name` | Product name |
| `chemical_name` | Chemical composition |
| `product_used_time` | Recommended usage time |
| `product_used_limit` | Usage limit |
| `description` | Product description |
| `prices` | Product price |
| `advatage` | Fertilizer benefits |
| `image` | Product image |

> **Note:** `advatage` is the current field name in the backend.

---

### 3. Crop

Stores crop information.

| Field | Description |
|---|---|
| `name` | Crop name |
| `variety` | Crop variety |
| `planting_method` | Planting method |
| `harvesting` | Harvesting information |
| `plant_shape` | Plant shape |
| `soil_type` | Suitable soil type |
| `climate` | Suitable climate |

---

## 📊 History Models

### 4. PerticiseHistory

Stores the user's pesticide-related history.

| Field | Description |
|---|---|
| `user` | User who made the prediction |
| `perticise` | Selected pesticide |
| `crop` | Related crop |

Relationship:

```text
User
 └── PerticiseHistory
       ├── Perticise
       └── Crop
```

---

### 5. FertilizerHistory

Stores the input data and prediction result from the fertilizer recommendation system.

| Field | Description |
|---|---|
| `soil` | Soil type |
| `ph` | Soil pH |
| `moisture` | Soil moisture |
| `ec` | Electrical conductivity |
| `carbon` | Soil carbon |
| `N` | Nitrogen |
| `P` | Phosphorus |
| `K` | Potassium |
| `Tempature` | Temperature |
| `humdity` | Humidity |
| `crop_type` | Crop type |
| `crop_growth` | Crop growth stage |
| `irrigation` | Irrigation method |
| `probability` | Prediction probability |
| `fertilizer_type` | Recommended fertilizer type |
| `user` | User who made the prediction |

> **Note:** `Tempature` and `humdity` are the current backend field names.

Example:

```text
Input
 ├── Soil
 ├── pH
 ├── Moisture
 ├── EC
 ├── Carbon
 ├── N
 ├── P
 ├── K
 ├── Temperature
 ├── Humidity
 ├── Crop Type
 ├── Crop Growth
 └── Irrigation

              ↓

       AI Fertilizer Model

              ↓

Prediction
 ├── Fertilizer Type
 └── Probability
```

---

### 6. CropHistory

Stores crop prediction history.

| Field | Description |
|---|---|
| `crop` | Predicted/selected crop |
| `user` | User who made the prediction |
| `N` | Nitrogen |
| `P` | Phosphorus |
| `K` | Potassium |
| `probability` | Prediction probability |
| `rainfall` | Rainfall |
| `temperature` | Temperature |
| `humidity` | Humidity |
| `ph` | Soil pH |
| `soil` | Soil type |

---

### 7. FertilizerHistoryItem

Connects a fertilizer history record with one or more fertilizers.

| Field | Description |
|---|---|
| `history` | Fertilizer history |
| `fertilizer` | Recommended fertilizer |

Relationship:

```text
FertilizerHistory
       │
       ├── FertilizerHistoryItem
       │       └── Fertilizer
       │
       ├── FertilizerHistoryItem
       │       └── Fertilizer
       │
       └── FertilizerHistoryItem
               └── Fertilizer
```

This allows **one fertilizer prediction history to contain multiple recommended fertilizers**.

---

# 🔐 Authentication API

## Register

```http
POST /api/account/register/
```

Creates a new user account and sends an OTP for verification.

---

## Verify Registration OTP

```http
POST /api/account/register/verify-otp
```

Verifies the OTP sent during registration.

---

## Login

```http
POST /api/account/login/
```

Authenticates an existing user.

---

## Verify Login OTP

```http
POST /api/account/login/verfiy-otp
```

Verifies the OTP required during login.

> **Note:** `verfiy-otp` appears to be the current endpoint spelling. Consider changing it to `verify-otp` in the future if possible.

---

# 🌾 Fertilizer API

## Get Fertilizers

```http
GET /api/fertilizers/
```

Returns the fertilizer/product list.

Example:

```http
GET /api/fertilizers/
```

---

## Get Fertilizer Detail

```http
GET /api/fertilizers/1
```

Returns information about fertilizer ID `1`.

---

# 🌱 Crop API

## Get Crops

```http
GET /api/crops
```

Returns the crop list.

---

## Get Crop Detail

```http
GET /api/crops/2
```

Returns information about crop ID `2`.

---

# 🔗 API Endpoint Summary

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/account/register/` | Register user |
| `POST` | `/api/account/register/verify-otp` | Verify registration OTP |
| `POST` | `/api/account/login/` | Login |
| `POST` | `/api/account/login/verfiy-otp` | Verify login OTP |
| `GET` | `/api/fertilizers/` | Get fertilizers |
| `GET` | `/api/fertilizers/1` | Get fertilizer detail |
| `GET` | `/api/crops` | Get crops |
| `GET` | `/api/crops/2` | Get crop detail |

---

# 🧩 Model Relationships

```text
                         ┌──────────┐
                         │   User   │
                         └────┬─────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
     PerticiseHistory  FertilizerHistory  CropHistory
             │                │                │
       ┌─────┴─────┐          │                │
       ▼           ▼          ▼                ▼
  Perticise      Crop   FertilizerHistoryItem  Crop
                              │
                              ▼
                         Fertilizer
```

---

# 🛠️ Technology

- Python
- Django
- Django REST Framework
- SQLite / MySQL
- REST API
- AI/ML prediction models
- JWT/Token-based authentication
- Image upload and storage

---

# 📱 Frontend Integration

The API can be consumed by:

- Web applications

Example:

```javascript
const response = await fetch(
  "http://localhost:8000/api/fertilizers/"
);

const data = await response.json();

console.log(data);
```

---

# 🚀 Local Development

Clone the project and enter the project directory:

```bash
git clone <repository-url>
cd argi-pro-api
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it on macOS/Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start the development server:

```bash
python manage.py runserver
```

The API will normally be available at:

```text
http://127.0.0.1:8000/
```

---

# 🌿 Argi Shield Features

### 👨‍🌾 Farmer

- User registration
- OTP verification
- Login
- Crop prediction
- Fertilizer recommendation
- Pesticide information
- Crop information
- Fertilizer/product information
- Prediction history

### 🤖 AI

- Crop prediction
- Fertilizer recommendation
- Prediction probability
- Multiple fertilizer recommendations

### 🛒 Fertilizer Management

- Brand management
- Product management
- Chemical information
- Usage information
- Pricing
- Product images
- Fertilizer advantages

---



