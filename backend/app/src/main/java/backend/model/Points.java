package backend.model;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import backend.DTO.PointsCreatedDTO;

import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "points")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Points {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "x")
    private float x;

    @Column(name = "y")
    private float y;

    @Column(name = "r")
    private float r;

    @Column(name = "ishit")
    private boolean isHit;

    @Column(name = "currenttime")
    private LocalDateTime currentTime;

    @Column(name = "executiontime")
    private int executionTime;  

    @Column(name = "userid")
    private long userId;
    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)

    public String getFormattedCurrentTime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        return currentTime.format(formatter);
    }

    public String getFormattedIsHit() {
        return isHit ? "HIT" : "MISS";
    }

    public PointsCreatedDTO getCreatedPoint(Points point) {
        return new PointsCreatedDTO(
            point.getX(),
            point.getY(),
            point.getR(),
            point.getFormattedIsHit(),
            point.getFormattedCurrentTime(),
            point.getExecutionTime()
        );
    }
}
