# HomeKey - Property Intelligence Platform

A modern real estate property detail page with AI-powered features, built with Next.js 16, React 19, and Tailwind CSS 4.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- OpenAI API key (for the AI chatbot feature)

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Add your OPENAI_API_KEY to .env.local

# Run the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the property listing, then click on any property to see the detail page with all features.

---

## 📝 Design Note

### Approach

The goal was to build a property detail page that goes beyond basic listings by providing **actionable intelligence** to help buyers make informed decisions. I focused on three core innovations:

#### 1. Property Intelligence Dashboard
Instead of just showing property specs, I created a data completeness visualization that shows buyers exactly what information is available and what's missing. This builds trust and helps identify due diligence gaps early.

- **Confidence Score**: A single 0-100 metric that aggregates data quality across categories
- **Progress Bars**: Visual indicators for Property Details, Legal & Title, Financial, and Environmental data
- **Smart Alerts**: Proactive warnings about potential issues (flood zones, missing docs, price changes)

#### 2. Interactive Risk Heatmap
A visual map overlay that contextualizes property risks geographically:

- **Toggleable Layers**: Flood zones, crime levels, environmental hazards, school districts
- **Zoom Controls**: City-level to block-level context
- **Hover Details**: Specific information about each risk zone
- **Aggregate Score**: Single risk metric derived from all factors

#### 3. AI-Powered Property Assistant
A conversational interface that makes property data accessible:

- **GPT-4o Integration**: Real AI responses via Vercel AI SDK
- **Full Context**: AI has access to all property data, intelligence metrics, and alerts
- **Streaming Responses**: Real-time typing effect for natural conversation feel
- **Quick Actions**: Pre-built questions for common queries

### Technical Decisions

| Decision | Rationale |
|----------|-----------|
| **Next.js 16 App Router** | Server components, streaming, and modern React patterns |
| **Tailwind CSS 4** | Rapid styling with new CSS-first configuration |
| **TypeScript** | Type safety for property/intelligence data structures |
| **Vercel AI SDK 3.x** | Stable API for streaming chat with OpenAI |
| **Static Data Files** | Simpler than a database for demo purposes; easy to swap for API calls |
| **Component Composition** | Each feature (Intelligence, Heatmap, Chatbot) is a self-contained component |

### Trade-offs

1. **Mock Data vs. Real APIs**
   - *Chose*: Static TypeScript data files
   - *Trade-off*: Faster development, but not production-ready
   - *Production*: Would integrate with property data APIs (MLS, county records, FEMA, etc.)

2. **CSS-based Map vs. Real Mapping Library**
   - *Chose*: Custom SVG/CSS visualization
   - *Trade-off*: Lighter bundle, but less interactive than Mapbox/Google Maps
   - *Production*: Would use Mapbox GL with real GeoJSON data layers

3. **Client-side Intelligence Calculation**
   - *Chose*: Pre-computed intelligence data
   - *Trade-off*: Simple to implement, but not dynamic
   - *Production*: Backend service that aggregates from multiple data sources

4. **AI Context in Request Body**
   - *Chose*: Send full property context with each message
   - *Trade-off*: Larger payloads, but simpler than maintaining server state
   - *Production*: Would use conversation memory or RAG for efficiency

### What I'd Do With More Time

#### Short-term
- [ ] **Real Map Integration**: Mapbox GL with actual GeoJSON risk layers from FEMA, crime APIs
- [ ] **PDF Report Generation**: Export property intelligence as a shareable PDF
- [ ] **Comparison View**: Side-by-side comparison of multiple properties
- [ ] **Save/Favorite Properties**: User accounts with saved property lists

#### Medium-term
- [ ] **Backend API**: Express/Fastify service for data aggregation
- [ ] **Real Data Sources**: Integration with county assessor, MLS, Zillow, FEMA APIs
- [ ] **RAG for Chatbot**: Vector database with property documents for smarter responses
- [ ] **Mobile App**: React Native version with push notifications for price changes

#### Long-term
- [ ] **Predictive Analytics**: ML models for price forecasting
- [ ] **Investment Calculator**: ROI projections with rental income estimates
- [ ] **Agent Matching**: Connect buyers with agents based on property preferences
- [ ] **AR View**: Augmented reality property tours via mobile camera

---

## 🏗️ Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/route.ts          # AI chatbot endpoint
│   │   ├── propertyHomes.tsx      # Property listings data
│   │   └── propertyIntelligence.tsx # Intelligence data
│   ├── properties/[slug]/page.tsx  # Property detail page
│   └── page.tsx                    # Property listing page
├── components/
│   ├── AgentChatbot/              # AI-powered chat widget
│   ├── PropertyIntelligence/      # Data completeness dashboard
│   ├── RiskHeatmap/               # Interactive risk visualization
│   └── Header/                    # Site navigation
└── types/
    ├── propertyHomes.ts           # Property type definitions
    └── propertyIntelligence.ts    # Intelligence type definitions
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
OPENAI_API_KEY=sk-your-api-key-here
```

---

## 📚 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **AI**: Vercel AI SDK 3.x, OpenAI GPT-4o
- **Icons**: Iconify (Phosphor Icons)
- **Fonts**: Bricolage Grotesque
- **Package Manager**: Bun
