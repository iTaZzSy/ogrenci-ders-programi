import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CourseCard({ course }) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/ders/${course.id}`);
  };

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: course.color || '#3B82F6' }]}
      activeOpacity={0.75}
      onPress={handlePress}
    >
      <View style={styles.topRow}>
        <View style={styles.badgeGroup}>
          <View style={[styles.codeBadge, { backgroundColor: course.color || '#3B82F6' }]}>
            <Text style={styles.codeText}>{course.code}</Text>
          </View>
          <Text style={styles.dayBadge}>{course.day}</Text>
        </View>
        <Text style={styles.timeText}>⏰ {course.time}</Text>
      </View>

      <Text style={styles.name} numberOfLines={1}>
        {course.name}
      </Text>

      <View style={styles.detailsRow}>
        <View style={styles.infoCol}>
          <Text style={styles.infoLabel}>Öğretim Elemanı</Text>
          <Text style={styles.infoValue} numberOfLines={1}>
            👨‍🏫 {course.instructor}
          </Text>
        </View>

        <View style={styles.classroomCol}>
          <Text style={styles.infoLabel}>Sınıf / Lab</Text>
          <View style={styles.roomTag}>
            <Text style={styles.roomText}>📍 {course.classroom}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  codeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  codeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  dayBadge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  name: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#F8FAFC',
    paddingTop: 8,
  },
  infoCol: {
    flex: 1,
    marginRight: 8,
  },
  infoLabel: {
    fontSize: 11,
    color: '#94A3B8',
    marginBottom: 2,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  classroomCol: {
    alignItems: 'flex-end',
  },
  roomTag: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  roomText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4338CA',
  },
});
