---
title: "F1 Qualifying Pace Predictor: ML Telemetry Pipeline"
description: "A Gradient Boosting Regressor that predicts Formula 1 qualifying results by normalizing FP3 track evolution and driver telemetry."
publishDate: "9 June 2025"
tags: ["Python", "Machine Learning", "FastF1 API", "Scikit-Learn", "Data Engineering"]
---

## Project Links
**[ View GitHub Repository](https://github.com/gcckd01/F1_Quali_Predictor)** | **[View Sample Predictions](https://github.com/gcckd01/F1_Quali_Predictor#example-output)**


### Project Overview
Developed a machine learning pipeline that predicts F1 Qualifying results based on **Practice Session 3 (FP3)** telemetry data. This project demonstrates that raw inputs like speed, throttle, and braking contain hidden signals correlating to qualifying performance, even under varying fuel loads.



### Key Insights & Impact

**Data Engineering (ETL)**: Leveraged the **FastF1 API** to extract granular telemetry at a **200Hz sample rate**.
**Normalization Logic**: Implemented a "Delta to Leader" calculation to normalize track evolution across different circuits.
**Feature Engineering**: Engineered contextual features, including telemetry aggregation (Max Speed, Avg Throttle) and "Top Team" weighting.
**Predictive Modeling**: Utilized a **Gradient Boosting Regressor** with a Learning-to-Rank approach to generate a performance score and predicted starting gri.
**Training Depth**: Trained the model on historical race weekend data from the 2023-2024 seasons to ensure predictive accuracy.

---
